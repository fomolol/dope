/**
 * @file ScrollProgressLine.js
 */
import React from 'react'
import cn from 'clsx'
import { motion, useTransform, useScroll } from 'framer-motion'
import PropTypes from 'prop-types'
import { useWindowSize } from '@fomolol/tacklebox'

import s from './ScrollProgressLine.module.css'

import { easeInOutSine } from '../../services/easing'

const LINE_VARIANTS = {
  visible: { height: '15vh', transition: { duration: 2, ease: easeInOutSine } },
  hidden: { height: '0vh' },
}

const ScrollProgressLine = ({
  tagName: Tag = 'div',
  className = 'fixed top-0 right-0 z-50 flex w-full h-screen pointer-events-none mix-blend-difference',
  variant = 'default',
  velocity,
  pageRange = [0.1, 0.33, 0.5, 1],
  lengthRange = ['15vh', '33vh', '66vh', '100vh'],
  forwardRef,
}) => {
  const { height: windowHeight } = useWindowSize()
  const { scrollY, scrollYProgress } = useScroll({ container: forwardRef })

  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange)
  const fHeight = calcHeight
    ? calcHeight
    : useTransform(scrollY, (value) => value - windowHeight * 0.5)

  return (
    <Tag
      className={cn(
        s.scroll_progress_line,
        s[`scroll_progress_line__${variant}`],
        className
      )}
    >
      <motion.div
        className="absolute top-[5vh] right-4 my-auto max-h-[90vh] rounded-full bg-white mix-blend-exclusion"
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        style={{ height: fHeight, width: '13px' }}
      />
    </Tag>
  )
}

ScrollProgressLine.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default ScrollProgressLine
