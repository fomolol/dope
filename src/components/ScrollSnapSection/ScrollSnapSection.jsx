/**
 * @file ScrollSnapSection.js
 *
 * This is to be used in coordination with the <ScrollerSnapper /> component
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

import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import useSound from 'use-sound'

import s from './ScrollSnapSection.module.css'

const CHILD_VARIANTS_SCALE = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 },
}

const CHILD_VARIANTS_LEFT = {
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, x: -500 },
}

const ScrollSnapSection = ({
  tagName: Tag = 'section',
  className = 'relative flex-none w-full h-auto min-h-screen text-white bg-white',
  innerClassName = 'flex justify-center items-center w-full relative h-full',
  variant = 'default',
  children = '',
  full = false,
  half = false,
  triggerOnce = false,
  content = false,
  variants,
  // variant variations
  transLeft = false,
  transScale = false,
  skipAnimation = true,
  sound = '/sounds/100472__iluppai__piano-chord-explosion.mp3',
}) => {
  const [play, { stop }] = useSound(sound)

  const { ref, inView, entry } = useInView({
    threshold: content ? 0.15 : 0.75,
    triggerOnce: triggerOnce,
  })

  let _variants = variants
    ? variants
    : // Apply some defaults
    transLeft
    ? CHILD_VARIANTS_LEFT
    : transScale
    ? CHILD_VARIANTS_SCALE
    : CHILD_VARIANTS_SCALE

  useEffect(() => {
    if (inView) {
      play()
    } else {
      stop()
    }
  }, [inView])

  return (
    <Tag
      className={`${s.scroll_snap_section} ${
        s[`scroll_snap_section__${variant}`]
      } ${className}`}
      ref={ref}
      style={
        content
          ? {
              height: 'auto',
              scrollSnapAlign: 'start',
            }
          : {
              height: full ? '100vh' : half ? '50vh' : 120,
              scrollSnapAlign: 'center',
            }
      }
    >
      {content ? (
        <motion.div
          className="relative w-full h-auto"
          initial={skipAnimation ? '' : 'hidden'}
          animate={skipAnimation ? '' : inView ? 'visible' : 'hidden'}
          variants={skipAnimation ? null : _variants}
        >
          {children}
        </motion.div>
      ) : (
        <motion.div
          className={innerClassName}
          initial={skipAnimation ? '' : 'hidden'}
          animate={skipAnimation ? '' : inView ? 'visible' : 'hidden'}
          variants={skipAnimation ? null : _variants}
        >
          {children}
        </motion.div>
      )}
    </Tag>
  )
}

ScrollSnapSection.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default ScrollSnapSection
