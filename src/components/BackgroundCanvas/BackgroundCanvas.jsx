/**
 * @file BackgroundCanvas.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { Canvas } from '@react-three/fiber'

import s from './BackgroundCanvas.module.css'

const BackgroundCanvas = ({
  tagName: Tag = 'div',
  className = 'pointer-events-none',
  variant = 'default',
  children,
  raycaster = false,
}) => {
  return (
    <Tag
      className={`${s.background_canvas} ${
        s[`background_canvas__${variant}`]
      } ${className} fixed top-0 left-0 z-0 w-screen h-screen`}
    >
      <Canvas
        raycaster={raycaster}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </Canvas>
    </Tag>
  )
}

BackgroundCanvas.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default BackgroundCanvas
