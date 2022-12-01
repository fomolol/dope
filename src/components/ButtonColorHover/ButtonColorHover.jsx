/**
 * @file ButtonColorHover.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import s from './ButtonColorHover.module.css'

const ButtonColorHover = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = 'Lorem Ipsum',
}) => {
  return (
    <Tag
      className={`${s.btn_color_hover} ${
        s[`btn_color_hover__${variant}`]
      } ${className}`}
    >
      <button
        class="btnCircle btn-Circle--gallery"
        visible=""
        style="--btnBgColor:#ffffff; --btnColor:#000000;"
      >
        <canvas
          data-ui="canvas"
          width="103"
          height="103"
          style="position: absolute; top: 50%; left: 50%; width: 51.6953px; height: 51.6953px; margin-top: -26px; margin-left: -26px;"
        ></canvas>
        <div data-ui="icon" style="opacity: 1;">
          <svg data-ui="grid" class="btnCircle__icon">
            <use xlinkHref="#grid"></use>
          </svg>
        </div>
        <div
          class="btnCircle__text"
          data-ui="text"
          style="opacity: 1; transform: translate(0px, 0px);"
        >
          {children}
        </div>
      </button>
    </Tag>
  )
}

ButtonColorHover.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default ButtonColorHover
