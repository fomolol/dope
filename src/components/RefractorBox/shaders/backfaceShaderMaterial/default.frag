// Backface Refraction Shader
// ThreeJS defaults
// uniform mat4 viewMatrix;
// uniform vec3 cameraPosition;

#ifdef GL_ES
precision mediump float;
#endif

varying vec3 eyeVector;
varying vec3 worldNormal;

void main() {
	vec4 worldPosition = modelMatrix * vec4( position, 1.0);
	eyeVector = normalize(worldPos.xyz - cameraPosition);
	worldNormal = normalize( modelViewMatrix * vec4(normal, 0.0)).xyz;

	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}



