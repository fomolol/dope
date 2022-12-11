/**
 * @file BlasterImage.js
 * Handles flashing multiple images based on a time interval
 */
import React, { useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import s from './BlasterImage.module.css'

/**
 * sleep
 * @param {*} milliseconds
 * @returns
 */
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

const BlasterImage = ({
  tagName: Tag = 'div',
  className = 'absolute inset-0 object-cover w-full h-screen',
  variant = 'default',
  children = '',
  items = [
    '/img/blaster/0.jpeg',
    '/img/blaster/1.jpeg',
    '/img/blaster/0.jpeg',
    '/img/blaster/1.jpeg',
    '/img/blaster/2.jpeg',
    '/img/blaster/0.jpeg',
    '/img/blaster/1.jpeg',
    '/img/blaster/2.jpeg',
  ],
  seconds = 0.44,
}) => {
  const millis = seconds * 1000
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const update = async () => {
      await sleep(millis)
      let tCounter = counter + 1
      if (tCounter >= items.length - 1) {
        tCounter = 0
      }
      setCounter(tCounter)
    }
    update()
  }, [counter])

  return (
    <Tag
      className={`${s.blaster_image} ${
        s[`blaster_image__${variant}`]
      } ${className}`}
    >
      <img
        src={items[counter]}
        key={`blast-img-${counter}`}
        alt=""
        className="object-cover w-full min-h-screen min-"
      />
    </Tag>
  )
}

BlasterImage.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default BlasterImage
