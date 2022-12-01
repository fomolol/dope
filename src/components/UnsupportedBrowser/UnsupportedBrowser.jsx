/**
 * @file UnsupportedBrowser.js
 */
import React from 'react'
import PropTypes from 'prop-types'

import s from './UnsupportedBrowser.module.css'

const UnsupportedBrowser = ({
  tagName: Tag = 'div',
  className = 'flex justify-center items-center bg-black w-screen z-50 h-screen',
  variant = 'default',
  children,
}) => {
  return (
    <Tag
      className={`${s.unsupported_browser} ${
        s[`unsupported_browser__${variant}`]
      } ${className}`}
    >
      <p className="text-center text-white uppercase text-40">
        Your browser is unsupported
      </p>
      {children}
    </Tag>
  )
}

UnsupportedBrowser.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default UnsupportedBrowser
