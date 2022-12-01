/**
 * @file CurtainWipe.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import styles from './CurtainWipe.module.css'

const CurtainWipe = ({
  tagName: Tag = motion.div,
  className = 'fixed inset-0 w-screen h-screen origin-top transform bg-black pointer-events-none min-h-screen-ios h-screen-ios',
  variant = 'default',
}) => {
  return (
    <Tag
      initial={{
        scaleY: 1,
        rotate: 0,
      }}
      animate={{
        scaleY: 0,
        rotate: 0.4,
      }}
      transition={{
        duration: 1.15,
        delay: 1.5, // Wait for textures to load.
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
      className={`${styles.curtain_wipe} ${
        styles[`curtain_wipe__${variant}`]
      } ${className}`}
    ></Tag>
  )
}

CurtainWipe.propTypes = {
  tagName: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default CurtainWipe
