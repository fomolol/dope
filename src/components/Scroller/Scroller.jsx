/**
 * @file Scroller.js
 */
import { useState, createRef, useCallback, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useMotionValue, useSpring, motion } from 'framer-motion'
import { useLayoutEffect } from '@fomolol/tacklebox'

import s from './Scroller.module.css'

const Scroller = ({
  tagName: Tag = motion.div,
  className = '',
  variant = 'default',
  children = '',
  damping = 15,
  mass = 0.15,
  stiffness = 25,
  disable = false,
  debug = true,
  scrollRef = createRef(),
  ...rest
}) => {
  const [contentHeight, setContentHeight] = useState()
  const scrollY = useMotionValue(-window.pageYOffset || -window.scrollY)

  const physics = {
    damping,
    mass,
    stiffness,
  } // easing of smooth scroll
  const y = useSpring(scrollY, physics) // apply easing to the negative scroll value

  const getContentHeight = useCallback((entries) => {
    for (let entry of entries) {
      const entryHeight = entry.contentRect.height
      setContentHeight(entryHeight)
    }
  }, [])

  useLayoutEffect(() => {
    const scrollContainer = scrollRef.current
    let resizeObserver = new ResizeObserver((entries) =>
      getContentHeight(entries)
    )
    resizeObserver.observe(scrollContainer)
    return () => resizeObserver.disconnect()
  }, [getContentHeight])

  useEffect(() => {
    const trackScroll = () => {
      if (window.scrollY || window.pageYOffset < contentHeight) {
        scrollY.set(-window.pageYOffset || -window.scrollY)
      }
    }
    window.addEventListener('scroll', trackScroll)
    return () => window.removeEventListener('scroll', trackScroll)
  }, [scrollY])

  return (
    <>
      <Tag
        id="scroll-container"
        className={`${s.scroller} ${
          s[`scroller__${variant}`]
        } ${className} pointer-events-auto fixed left-0 right-0 z-0 will-change-transform`}
        {...rest}
        style={disable ? null : { y }} // translateY of scroll container using negative scroll value
        ref={scrollRef}
      >
        {children}
      </Tag>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      {scrollRef.current && contentHeight ? (
        <div
          className="pointer-events-none"
          style={disable ? { height: '0px' } : { height: `${contentHeight}px` }}
        />
      ) : null}
    </>
  )
}

Scroller.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default Scroller
