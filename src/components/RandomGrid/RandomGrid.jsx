/**
 * @file RandomGrid.js
 */
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './RandomGrid.module.css'

const RandomCorners = ({ left = 73, top = 45 }) => {
  return (
    <div
      className="absolute z-10 text-black"
      style={{
        left: `${left}%`,
        top: `${top}%`,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 100 100"
        stroke="current"
        fill="none"
        strokeWidth="8"
        className="text-current stroke-current"
      >
        <path d="M0 0 L0 16 M0 0 L16 0" transform="rotate(0, 50, 50)"></path>
        <path d="M0 0 L0 16 M0 0 L16 0" transform="rotate(90, 50, 50)"></path>
        <path d="M0 0 L0 16 M0 0 L16 0" transform="rotate(180, 50, 50)"></path>
        <path d="M0 0 L0 16 M0 0 L16 0" transform="rotate(270, 50, 50)"></path>
      </svg>
    </div>
  )
}
const RandomGrid = ({
  tagName: Tag = 'div',
  className = 'absolute top-0 left-0 w-full h-full',
  variant = 'default',
  children = '',
  count = 6,
}) => {
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    var int
    const refreshGrid = () => {
      int = setTimeout(() => setRefresh(!refresh), 2000)
    }
    refreshGrid()
    return () => clearTimeout(int)
  }, [refresh])

  return (
    <Tag
      className={`${styles.random_grid} ${
        styles[`random_grid__${variant}`]
      } ${className}`}
    >
      {[...Array(count).keys()].map((_, i) => {
        const rLeft = Math.floor(Math.random() * 100)
        const rTop = Math.floor(Math.random() * 100)
        return <RandomCorners key={`r-grid-${i}`} left={rLeft} top={rTop} />
      })}
    </Tag>
  )
}

RandomGrid.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default RandomGrid
