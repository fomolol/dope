import glsl from 'glslify';

export const Shaders = {
  torus: {
    vertexShader: glsl`
    varying vec2 vUv;
    varying vec3 vPos;

    void main() {
        vUv = uv;
        vPos = position;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
  `,
    fragmentShader: glsl`
    varying vec2 vUv;
    varying vec3 vPos;

    uniform sampler2D uTexture;
    uniform float uTime;

    void main() {
      float time = uTime * 0.5;
      vec2 repeat = -vec2(12., 3.);
      // To repeat the uvs we need to multiply them by a scalar
      // and then get the fractional part of it so they from 0 to 1
      // To move them continuously we have to add time
      // to the x or y component, to change the direction
      vec2 uv = fract(vUv * repeat - vec2(time, 0.)); // The sign of time change direction of movement

      // Fake shadow
      float shadow = clamp(vPos.z / 5., 0., 1.);

      vec3 texture = texture2D(uTexture, uv).rgb;
      // texture *= vec3(uv.x, uv.y, 1.); // To help visualize the repeated uvs

      gl_FragColor = vec4(texture * shadow, 1.);
    }`,
  },
  box: {
    vertexShader: glsl`
    
      varying vec2 vUv;
      varying vec3 vPos;

      const float PI = 3.1415926535897932384626433832795;

      mat4 rotation3d(vec3 axis, float angle) {
        axis = normalize(axis);
        float s = sin(angle);
        float c = cos(angle);
        float oc = 1.0 - c;
      
        return mat4(
          oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
          oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
          oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
          0.0,                                0.0,                                0.0,                                1.0
        );
      }

      vec3 rotate(vec3 v, vec3 axis, float angle) {
        return (rotation3d(axis, angle) * vec4(v, 1.0)).xyz;
      } 

      void main() {
          vUv = uv;
          vPos = position;
          vec3 axis = vec3(1.0, 0.0, 0.0);
          vec3 pos = rotate(position, axis, position.x * 0.1);

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
      }
    `.trim(),
    fragmentShader: glsl`
      varying vec2 vUv;
      varying vec3 vPos;

      uniform sampler2D uTexture;
      uniform float uTime;

      void main() {
          vec2 offset = vec2(uTime * 0.1, 0.0);
          vec2 repeats = vec2(3.0, 3.0);
          vec2 uv = fract((vUv + offset) * repeats);
          vec3 texture = texture2D(uTexture, uv).rgb;

          gl_FragColor = vec4(texture, 1.);
      }
    `.trim(),
  },
};
