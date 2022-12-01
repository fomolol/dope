/**
 * @file Scroller.js
 */
import { createRef, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import ResizeObserver from 'resize-observer-polyfill'
import { useTransform, useSpring, motion, useScroll } from 'framer-motion'
import { useLayoutEffect } from '@fomolol/tacklebox'

import s from './Scroller.module.css'

import { useStore } from '@/store'

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
  // page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState(0)

  // update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height)
    }
  }, [])

  // observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    )
    scrollRef && resizeObserver.observe(scrollRef.current)
    return () => resizeObserver.disconnect()
  }, [scrollRef, resizePageHeight])

  const { scrollY } = useScroll() // measures how many pixels user has scrolled vertically
  // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
  const physics = { damping, mass, stiffness } // easing of smooth scroll
  const spring = useSpring(transform, physics) // apply easing to the negative scroll value

  return (
    <>
      <Tag
        ref={scrollRef}
        id="scroll-container"
        className={`${s.scroller} ${
          s[`scroller__${variant}`]
        } ${className} scroll-container pointer-events-auto fixed left-0 right-0 z-0 will-change-transform`}
        {...rest}
        style={disable ? null : { y: spring }} // translateY of scroll container using negative scroll value
      >
        {children}
      </Tag>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      {scrollRef.current && pageHeight ? (
        <div
          className="pointer-events-none"
          style={
            disable || !scrollerEnabled
              ? { height: '0px' }
              : { height: `${pageHeight}px` }
          }
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
