/**
 * @file ButtonColorHover.js
 */
import * as React from 'react';
import PropTypes from 'prop-types';

import s from './ButtonColorHover.module.css';

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
        className="btnCircle btn-Circle--gallery"
        visible=""
        style={{
          '--btnBgColor': '#ffffff',
          '--btnColor': '#000000;',
        }}
      >
        <canvas
          data-ui="canvas"
          width="103"
          height="103"
          className="absolute top-[50%] left-[50%] mt-[-26px] ml-[-26px] h-[51.6953px] w-[51.6953px]"
        ></canvas>
        <div data-ui="icon" className="opacity-100">
          <svg data-ui="grid" className="btnCircle__icon">
            <use xlinkHref="#grid"></use>
          </svg>
        </div>
        <div
          className="btnCircle__text translate-[0px_0px] transform opacity-100"
          data-ui="text"
        >
          {children}
        </div>
      </button>
    </Tag>
  );
};

ButtonColorHover.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default ButtonColorHover;
