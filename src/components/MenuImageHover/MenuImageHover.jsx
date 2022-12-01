/**
 * @file MenuImageHover.js
 */
import { useState, useRef, useEffect } from 'react'
import { animate, motion, useMotionValue, AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'
import cn from 'clsx'
import { useHoverImage } from '@fomolol/tacklebox'

import s from './MenuImageHover.module.css'

import { easeInOutSine, easeInOutCirc } from '../services/easing'

const HoverImageContainer = ({ children }) => {
  return (
    <motion.div
      className="relative w-full h-full overflow-hidden"
      initial="open"
      animate="show"
      exit="hide"
      variants={{
        open: {
          translateX: '100%',
          transition: {
            duration: 0.5,
            ease: easeInOutSine,
          },
        },
        hide: {
          translateX: '-100%',
          transition: {
            duration: 0.5,
            ease: easeInOutSine,
          },
        },
        show: {
          translateX: '0%',
          transition: {
            duration: 0.5,
            ease: easeInOutSine,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

const HoverImage = ({ src }) => {
  return (
    <motion.div
      className={`h-full w-full bg-cover bg-center`}
      initial="open"
      animate="show"
      exit="hide"
      variants={{
        open: {
          translateX: '-100%',
          transition: {
            duration: 0.5,
            ease: easeInOutSine,
          },
        },
        hide: {
          translateX: '100%',
          transition: {
            duration: 0.5,
            ease: easeInOutSine,
          },
        },
        show: {
          translateX: '0%',
          transition: {
            duration: 0.5,
            ease: easeInOutSine,
          },
        },
      }}
      style={{
        backgroundImage: `url(${src})`,
      }}
    />
  )
}

const MenuImageHover = ({
  tagName: Tag = 'div',
  className = 'relative flex items-center justify-center transition duration-500 ease-in-out-expo',
  variant = 'default',
  children = '',
  src = '/img/pizza.gif',
  alt = 'lorem ipsum',
}) => {
  const ref = useRef()
  const reveal = useRef()
  const [active, setActive] = useState(false)

  const opacity = useMotionValue(0)

  // returns all of the motion values for the container
  const { transform, filter } = useHoverImage(ref, reveal)

  useEffect(() => {
    if (active) {
      animate(opacity, 1, {
        duration: 1,
        ease: easeInOutCirc,
      })
    } else {
      animate(opacity, 0, {
        duration: 1,
        ease: easeInOutCirc,
      })
    }
  }, [active])

  return (
    <Tag
      className={cn(
        s.menu_image_hover,
        s[`menu_image_hover__${variant}`],
        className,
        active ? 'z-20' : 'z-1'
      )}
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      ref={reveal}
    >
      <motion.div
        className={`pointer-events-none absolute z-0 h-[calc(692px/1.5)] w-[calc(563px/1.5)] origin-center overflow-hidden`}
        style={{
          transform,
          filter,
          opacity,
        }}
      >
        <AnimatePresence>
          {active && (
            <HoverImageContainer>
              <HoverImage src={src} />
            </HoverImageContainer>
          )}
        </AnimatePresence>
      </motion.div>
      <p ref={ref} className="relative z-1">
        {children}
      </p>
    </Tag>
  )
}

MenuImageHover.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default MenuImageHover
