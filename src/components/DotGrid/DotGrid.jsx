/**
 * @file DotGrid.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import s from './DotGrid.module.css'

const DotGrid = ({
  tagName: Tag = 'div',
  className = 'fixed bottom-0 left-0 right-0 flex justify-start items-center p-20 h-[200px] w-full backdrop-blur-sm',
  variant = 'default',
  children = '',
  color1 = 'rgba(0, 0, 0, 0)',
  color2 = '#ffffff',
  color3 = 'rgba(255, 255, 255, 1)',
  size: backgroundSize = '20px 20px',
  dotSize = '2.5px',
}) => {
  return (
    <Tag
      className={`${s.dot_grid} ${
        s[`dot_grid__${variant}`]
      } dot-grid ${className}`}
      style={{
        backgroundImage: `radial-gradient( ${color1} ${dotSize}, ${color2} ${dotSize})`,
        backgroundSize,
      }}
    >
      {children}
      <style jsx>{`
        .dot-grid::before {
          display: block;
          content: '';
          position: absolute;
          top: -1px;
          left: 0;
          right: 0;
          height: 1px;
          background: ${color3};
          opacity: 0.2;
        }
      `}</style>
    </Tag>
  )
}

DotGrid.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default DotGrid
