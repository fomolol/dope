/**
 * @file RefractorBox.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import useErrorBoundary from 'use-error-boundary'
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber'
import {
  RoundedBox,
  PerspectiveCamera,
  OrthographicCamera,
  useTexture,
  Loader,
  useFBO,
} from '@react-three/drei'

import * as THREE from 'three'
import RefractionMaterial from './shaders/refractionShaderMaterial'
import { useLayoutEffect } from 'hooks/useIsoLayoutEffect'

const Background = () => {
  const ref = React.useRef()
  const { viewport } = useThree()
  const tex = useTexture('/3d/textures/gradient.jpg')
  useLayoutEffect(() => {
    ref.current.layers.set(1)
  }, [])

  useFrame(() => {
    ref.current.position.setY(-3000)
  })

  return (
    <mesh ref={ref} scale={[viewport.width, viewport.height, 1]}>
      <planeBufferGeometry args={[1, 1]} />
      <meshBasicMaterial map={tex} />
    </mesh>
  )
}

const Lights = () => {
  const { viewport } = useThree()
  return (
    <>
      <pointLight color={0xffffff} position={[0, 0, -200]} />
      <pointLight color={0xffffff} position={[0, 0, viewport.height * -1]} />
    </>
  )
}

const CameraRig = () => {
  const { viewport } = useThree()
  const camera = React.useRef()
  const orthoCamera = React.useRef()

  const camera2 = React.useRef()
  const orthoCamera2 = React.useRef()

  useLayoutEffect(() => {
    if (orthoCamera.current && orthoCamera2.current) {
      orthoCamera.current.layers.set(1)
      orthoCamera2.current.layers.set(1)
    }
  }, [])

  useFrame(({ gl, scene }) => {
    // TODO: See if this is needed
    // gl.clear();

    // camera.current.update(gl, scene);

    orthoCamera2.current.position.setY(-3000)
    // camera2.current.position.setY(-3000);

    // this.velocity *= 0.78;

    // render env to fbo
    gl.render(scene, orthoCamera2.current)

    // render cube backfaces to fbo
    gl.render(scene, camera)

    // render env to screen
    gl.setRenderTarget(null)
    gl.render(scene, orthoCamera)
    gl.clearDepth()

    // render cube with refraction material to screen
    gl.render(scene, camera)
  })
  return (
    <>
      <PerspectiveCamera
        ref={camera}
        makeDefault
        args={[50, viewport.width / viewport.height, 0.1, 1000]}
      />
      <OrthographicCamera
        ref={orthoCamera}
        args={[
          viewport.width / -2,
          viewport.width / 2,
          viewport.height / 2,
          viewport.height / -2,
          1,
          1000,
        ]}
      />

      <PerspectiveCamera
        ref={camera2}
        makeDefault
        args={[50, viewport.width / viewport.height, 0.1, 1000]}
      />
      <OrthographicCamera
        ref={orthoCamera2}
        args={[
          viewport.width / -2,
          viewport.width / 2,
          viewport.height / 2,
          viewport.height / -2,
          1,
          1000,
        ]}
      />
    </>
  )
}

const Scene = () => {
  const { viewport } = useThree()
  const boxRef = React.useRef()

  console.log('boxRef', boxRef)

  console.log('viewport', viewport)

  const envFbo = new THREE.WebGLRenderTarget(
    viewport.width * viewport.dpr,
    viewport.height * viewport.dpr
  )
  const backfaceFbo = new THREE.WebGLRenderTarget(
    viewport.width * viewport.dpr,
    viewport.height * viewport.dpr
  )

  console.log('envFbo', envFbo)
  console.log('backfaceFbo', backfaceFbo)

  const cubeAlpha = useTexture('/3d/textures/gradient.jpg')
  console.log('cubeAlpha', cubeAlpha)

  console.log('RoundedBox', RoundedBox)
  let velocity = 0.5

  useFrame(({ gl, scene, viewport }) => {
    gl.clear()

    ref.current.position.setY(-3000)

    velocity *= 0.78
    boxRef.current.rotation.y +=
      this.velocity +
      Math.sign(this.velocity) * 0.005 * (1 - Number(this.pointerDown))

    // Set x rotation.
    if (viewport.width > viewport.height) {
      boxRef.current.rotation.z = 0
    } else {
      boxRef.current.rotation.z = 1
      boxRef.current.scale.y = 0.5
      boxRef.current.scale.z = 0.5
    }

    // render env to fbo
    gl.setRenderTarget(envFbo)
    gl.render(scene, orthoCamera2)

    // render cube backfaces to fbo
    boxRef.current.material = backfaceMaterial
    gl.setRenderTarget(backfaceFbo)
    gl.clearDepth()
    gl.render(scene, camera)

    // render env to screen
    gl.setRenderTarget(null)
    gl.render(scene, orthoCamera)
    gl.clearDepth()

    // render cube with refraction material to screen
    boxRef.current.material = refractionMaterial
    gl.render(scene, camera)
  })

  return (
    <group>
      <Background />
      <RoundedBox
        ref={boxRef}
        args={[2.925, 1.3, 1.3]}
        radius={1 / 40}
        smoothness={2}
      >
        <RefractionMaterial
          uniforms-envMap-value={envFbo.texture}
          uniforms-backfaceMap-value={backfaceFbo.texture}
          uniforms-iResolution-value={[viewport.width, viewport.height]}
        />
      </RoundedBox>
    </group>
  )
}

const RefractorBox = ({}) => {
  const { ErrorBoundary, didCatch, error } = useErrorBoundary()

  return (
    <main className="absolute top-0 left-0 w-screen h-screen pointer-events-none">
      <ErrorBoundary>
        <Canvas>
          <React.Suspense fallback={null}>
            <Scene />
          </React.Suspense>
          <Lights />
          <CameraRig />
          <Loader />
        </Canvas>
      </ErrorBoundary>
    </main>
  )
}

RefractorBox.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default RefractorBox
