/**
 * @file Cursor.js
 */
import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { isSafari } from 'react-device-detect'

import s from './Cursor.module.css'

const Cursor = ({
  tagName: Tag = 'div',
  className = 'hidden pointer-events-none md:block mix-blend-difference',
  variant = 'default',
  themeColor = 'light',
  cursorColor = 'light',
  navOpen = false,
  cursorStyle = 'normal', // default, hover
  setCursorColor = (color) => console.log('Setting the color to', color),
  onMouseUp = () => console.log('mouse up'),
  onMouseDown = () => console.log('mouse down'),
}) => {
  const outside = useRef()
  const inside = useRef()
  const text = useRef()
  const [down, setDown] = useState(false)
  const [sound, soundActivated] = useState(false)

  let cursorStyles =
    'h-[50px] w-[50px] translate-x-[calc(-50% + 15px)] translate-y-[-50%] rounded-full'

  useEffect(() => {
    setCursorColor(themeColor)
  }, [themeColor])

  useEffect(() => {
    const mouseMoveOutside = (e) => {
      var x = e.clientX
      var y = e.clientY
      if (outside.current) {
        outside.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
      }
      if (text.current) {
        text.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px + 175%), 0)`
      }
    }
    const mouseMoveInside = (e) => {
      if (inside.current) {
        var x = e.clientX
        var y = e.clientY
        inside.current.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`
      }
    }
    const mouseDown = (e) => {
      setDown(true)
      if (!sound) soundActivated(true)
      if (typeof onMouseDown !== 'undefined') onMouseDown(e)
    }
    const mouseUp = (e) => {
      setDown(false)
      if (typeof onMouseUp !== 'undefined') onMouseUp(e)
    }

    document.addEventListener('mousemove', mouseMoveOutside)
    document.addEventListener('mousemove', mouseMoveInside)
    document.addEventListener('mousedown', mouseDown)
    document.addEventListener('mouseup', mouseUp)

    return () => {
      document.removeEventListener('mousemove', mouseMoveOutside)
      document.removeEventListener('mousemove', mouseMoveInside)
      document.removeEventListener('mousedown', mouseDown)
      document.removeEventListener('mouseup', mouseUp)
    }
  }, [])

  switch (cursorStyle) {
    case 'normal':
      break
    case 'default':
      break
    case 'hover':
      cursorStyles =
        'h-[42px] w-[42px] translate-x-[calc(-50% + 15px)] translate-y-[-50%] rounded-full'
      break
    default:
      break
  }

  return (
    <Tag className={`${s.cursor} ${s[`cursor__${variant}`]} ${className}`}>
      <div
        ref={outside}
        className={`${
          down ? 'border-purple-brand-dark' : 'border-current'
        } ${cursorStyles}  ouside pointer-events-none fixed left-0 top-0 transform border ${
          isSafari ? '' : 'transition-all duration-500 ease-out'
        } ${navOpen ? 'z-infinity' : 'z-cursor'} ${
          cursorColor === 'dark' || themeColor === 'dark'
            ? 'text-white'
            : 'text-white'
        }`}
      ></div>
      <div
        ref={inside}
        className={`${
          down || cursorStyle === 'hover'
            ? 'h-[12px] w-[12px] rounded-full bg-current'
            : 'h-[4px] w-[4px] rounded-full bg-current'
        } inside pointer-events-none fixed top-0 left-0 transform ${
          navOpen ? 'z-infinity' : 'z-cursor'
        } ${
          cursorColor === 'dark' || themeColor === 'dark'
            ? 'text-white'
            : 'text-white'
        }`}
      ></div>
      <p
        ref={text}
        className={`fixed top-0 left-0 block transform whitespace-nowrap text-center text-xs text-white ${
          isSafari ? '' : 'transition-all duration-700 ease-out'
        } ${sound ? 'opacity-0' : 'opacity-100'}`}
      >
        Click for sound
      </p>

      <style jsx>{`
        .hover {
          opacity: 0.5;
        }

        .inside {
          transition: width 0.3s, height 0.3s, opacity 0.3s;
        }
      `}</style>
    </Tag>
  )
}

Cursor.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  themeColor: PropTypes.string,
  cursorColor: PropTypes.string,
  navOpen: PropTypes.bool,
  cursorStyle: PropTypes.oneOf('default', 'normal', 'hover'),
  setCursorColor: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseDown: PropTypes.func,
}

export default Cursor
