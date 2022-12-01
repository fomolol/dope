/**
 * @file KineticType.js
 */
import { useRef, useMemo } from 'react'
import PropTypes from 'prop-types'

import * as THREE from 'three'
import { useThree, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { useControls, folder } from 'leva'

import { Fonts } from './fonts'
import { Shaders } from './shaders'

import styles from './KineticType.module.css'

function Font({ fontRef, text = 'Lorem ipsum' }) {
  const { fontSize, fontWidth, fontHeight, fontDepth, font, color } =
    useControls({
      Font: folder({
        fontSize: { min: 1, max: 100, value: 61, step: 1 },
        fontWidth: { min: 0, max: 10, value: 0.29, step: 0.01 },
        fontHeight: { min: 0, max: 10, value: 1, step: 0.01 },
        fontDepth: { min: 0, max: 10, value: 1, step: 0.01 },
        font: {
          options: Object.keys(Fonts),
          value: 'Orbitron',
        },
        color: '#ffffff',
      }),
    })

  return (
    <Text
      ref={fontRef}
      scale={[fontWidth, fontHeight, fontDepth]}
      color={color}
      font={Fonts[font]}
      fontSize={fontSize}
    >
      {text}
    </Text>
  )
}

const TorusKnot = ({ rt }) => {
  const shaderOpts = {
    vertexShader: Shaders.torus.vertexShader,
    fragmentShader: Shaders.torus.fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uTexture: { value: rt.texture },
    },
  }
  const shaderMaterial = useRef(null)

  useFrame(({ clock }) => {
    if (!shaderMaterial.current) return
    shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime()
  }, 1)

  return (
    <mesh>
      <torusKnotBufferGeometry args={[9, 3, 768, 3, 4, 3]} />
      <shaderMaterial ref={shaderMaterial} args={[shaderOpts]} />
    </mesh>
  )
}

const Box = ({ rt }) => {
  const shaderOpts = {
    vertexShader: Shaders.box.vertexShader,
    fragmentShader: Shaders.box.fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uTexture: { value: rt.texture },
    },
  }

  console.log(Shaders.box.fragmentShader)
  const shaderMaterial = useRef(null)

  useFrame(({ clock }) => {
    if (!shaderMaterial.current) return
    shaderMaterial.current.uniforms.uTime.value = clock.getElapsedTime()
  }, 1)

  return (
    <mesh>
      <boxBufferGeometry args={[100, 10, 10, 64, 64, 64]} />
      <shaderMaterial ref={shaderMaterial} args={[shaderOpts]} />
    </mesh>
  )
}

const Content = ({
  variant,
  fontBackgroundColor = '#fff000',
  text = 'Lorem ipsum',
}) => {
  const { gl, scene, camera } = useThree()
  const font = useRef()

  const { cameraZ } = useControls({
    Camera: folder({
      cameraZ: { min: 1, max: 100, value: 70, step: 1 },
    }),
  })

  const [rt, rtScene, rtCamera] = useMemo(() => {
    const rt = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight
    )

    const rtCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)

    const rtScene = new THREE.Scene()
    rtScene.background = new THREE.Color(fontBackgroundColor)

    return [rt, rtScene, rtCamera]
  }, [fontBackgroundColor])

  useEffect(() => {
    rtScene.add(font.current)
  }, [rtScene, font])

  useFrame(() => {
    rtCamera.position.z = cameraZ

    gl.setRenderTarget(rt)
    gl.render(rtScene, rtCamera)
    gl.setRenderTarget(null)
    gl.render(scene, camera)
  }, 1)

  return (
    <>
      {variant === 'knot' ? <TorusKnot rt={rt} /> : <Box rt={rt} />}
      <Font fontRef={font} text={text} />
    </>
  )
}

const KineticType = ({ variant = 'box', text: _text = 'FAKE' }) => {
  const { text, fontBackgroundColor } = useControls({
    Scene: folder({
      fontBackgroundColor: '#d8345f',
      text: _text,
    }),
  })
  return (
    <Content
      variant={variant}
      text={text}
      fontBackgroundColor={fontBackgroundColor}
    />
  )
}

KineticType.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['box', 'knot']),
  children: PropTypes.node,
}

export default KineticType
