import { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { ComputedAttribute } from '@react-three/drei'
import { patchShaders } from 'gl-noise'
import CustomShaderMaterial from 'three-custom-shader-material'

const Particles = () => {
  const matRef = useRef()
  const nPoints = useMemo(() => 75, [])

  useFrame(({ clock }) => {
    matRef.current.uniforms.u_time.value = clock.elapsedTime
  })

  return (
    <points>
      <bufferGeometry>
        <ComputedAttribute
          name="position"
          compute={() =>
            new THREE.Float32BufferAttribute(
              new Array(nPoints).fill(0).map(() => Math.random()),
              3
            )
          }
        />
      </bufferGeometry>
      <CustomShaderMaterial
        ref={matRef}
        baseMaterial={THREE.PointsMaterial}
        size={0.1}
        transparent
        uniforms={{ u_time: { value: 0 } }}
        vertexShader={patchShaders(`
          uniform float u_time;
          varying vec2 vUv;

          void main() {
            vUv = uv;
            vec3 n = gln_curl(position + u_time * 0.005);
            // n.x = 0.;
            csm_Position = n * 1.5;
          }
        `)}
        fragmentShader={`
          varying vec2 vUv;
          
          void main(){
              vec2 uv = vec2(gl_PointCoord.x, 1. - gl_PointCoord.y);
              vec2 cUV = 2. * uv - 1.;

              vec4 color = vec4(.08 / length(cUV));
              color.rgb = min(vec3(1.), color.rgb);

              csm_DiffuseColor = vec4(color.rgb, color.a * 0.5);
          }
        `}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default Particles
