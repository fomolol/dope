/**
 * @file ScrollerSnapper.js
 * This component is used in coordination with the <ScrollSnapSection /> component.
 *
 * WARNING: Beta version, use with caution
 */

/**
 * Example implementation
 *  <ScrollerSnapper>
 *   <ScrollSnapSection>
 *     <div
 *       className="flex flex-col w-full h-screen p-12 overflow-x-hidden"
 *       sound="...."
 *     >
 *       ...
 *     </div>
 *   </ScrollSnapSection>
 *   <ScrollSnapSection>
 *     <div
 *       className="flex flex-col w-full h-screen p-12 overflow-x-hidden"
 *       sound="...."
 *     >
 *       ...
 *     </div>
 *   </ScrollSnapSection>
 *  </ScrollerSnapper>
 */
import { useState, createRef, useCallback, forwardRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useLayoutEffect } from '@fomolol/tacklebox'

import ScrollProgressLine from '../ScrollProgressLine'

// local
import Debugger from './Debugger'

import s from './ScrollerSnapper.module.css'

/**
 * SnapParent
 */
const SnapParent = forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={`overflow-touch absolute h-screen w-full snap-y snap-mandatory overflow-scroll`}
  >
    {props.children}
    <style jsx>{`
      .overflow-touch {
        -webkit-overflow-scrolling: touch;
      }
    `}</style>
  </div>
))

const ScrollerSnapper = ({
  tagName: Tag = motion.div,
  className = 'pointer-events-auto',
  variant = 'default',
  children = '',
  damping = 15,
  mass = 0.15,
  stiffness = 25,
  disable = false,
  debug = true,
  scrollRef = createRef(),
  pageRange = [0.1, 0.25, 0.5, 1],
  lengthRange = ['15vh', '25vh', '50vh', '100vh'],
  ...rest
}) => {
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

  const { scrollY, scrollYProgress } = useScroll({
    target: scrollRef.current,
  }) // measures how many pixels user has scrolled vertically

  useEffect(() => {
    scrollY.onChange((v) => setScrollYValue(v))
    scrollYProgress.onChange((v) => setScrollYProgressValue(v))
  }, [scrollY, scrollYProgress])

  return (
    <>
      <Tag
        className={`${s.scroller_snapper} ${
          s[`scroller_snapper__${variant}`]
        } ${className} scroll-container pointer-events-auto fixed left-0 right-0 z-0 will-change-transform`}
        id="scroll-container"
        {...rest}
      >
        <ScrollProgressLine
          width={scrollYProgress.getVelocity()}
          forwardRef={scrollRef}
        />
        <SnapParent ref={scrollRef}>{children}</SnapParent>
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

ScrollerSnapper.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default ScrollerSnapper
