/**
 * @file BlasterText.js
 * Handles flashing multiple text based on a time interval
 */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { AnimatePresence, motion } from 'framer-motion'
import useFitText from 'use-fit-text'

import s from './BlasterText.module.css'

/**
 * sleep
 * @param {*} milliseconds
 * @returns
 */
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

const BlasterText = ({
  tagName: Tag = 'div',
  className = 'absolute inset-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm h-screen-ios',
  variant = 'default',
  children = '',
  items = [
    'Epic',
    'Unforgettable',
    'Dreamlike',
    'Gritty',
    'Immersive',
    'Incredible',
    'Magical',
    'Emotional',
    // "We're making the metaverse mean something.",
  ],
  seconds = 1.25,
  start = false,
  repeat = Infinity,
}) => {
  const { fontSize, ref } = useFitText({
    maxFontSize: 1500,
    minFontSize: 200,
    onFinish: () => console.log('Finished sizing!'),
    onStart: () => console.log('Started sizing!'),
  })

  const millis = seconds * 1000
  const [counter, setCounter] = useState(0)

  console.log('items', items[counter])

  useEffect(() => {
    const update = async () => {
      await sleep(millis)
      let tCounter = counter + 1
      if (tCounter >= items.length) {
        tCounter = 0
      }
      if (repeat == Infinity || repeat < counter) {
        setCounter(tCounter)
      }
    }
    if (start) {
      update()
    }
  }, [start, counter])

  return (
    <Tag
      className={`${s.blaster_text} ${
        s[`blaster_text__${variant}`]
      } ${className}`}
    >
      <AnimatePresence mode="wait">
        {start ? (
          <motion.div
            key={`text-${counter}`}
            className="flex items-center justify-center w-full h-auto overflow-hidden text-center"
          >
            <motion.p
              ref={ref}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.75,
                ease: 'easeInOut',
              }}
              className="w-full h-auto text-center text-white font-pixel"
              style={{ fontSize }}
            >
              &quot;{items[counter]}&quot;
            </motion.p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Tag>
  )
}

BlasterText.propTypes = {
  tagName: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default BlasterText
