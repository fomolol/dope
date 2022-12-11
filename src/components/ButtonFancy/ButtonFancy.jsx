/**
 * @file ButtonFancy.js
 * @see https://codepen.io/wheatup/pen/wbQjRL
 */
import React, { useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonFancy.module.css';

const ButtonFancy = ({
  tagName: Tag = 'div',
  className = 'text-sm',
  buttonClassName = 'h-4',
  variant = 'default',
  children = 'Lorem ipsum',
}) => {
  const btn = useRef();

  const handleMouseMove = useCallback(({ offsetX, offsetY }) => {
    let x = 1 - (btn.current.offsetWidth - offsetX) / btn.current.offsetWidth;
    let y = 1 - (btn.current.offsetHeight - offsetY) / btn.current.offsetHeight;
    btn.current.style.setProperty('--perX', (x * 100).toFixed(2) + '%');
    btn.current.style.setProperty('--perY', (y * 100).toFixed(2) + '%');
  }, []);

  useEffect(() => {
    const _btn = btn.current;
    _btn.addEventListener('mousemove', handleMouseMove);
    return () => _btn.removeEventListener('mousemove', handleMouseMove);
  }, [btn, handleMouseMove]);

  return (
    <Tag className={`${className}`}>
      <a
        ref={btn}
        href="#!"
        className={`${styles.button_fancy} ${buttonClassName}`}
      >
        {children}
      </a>
    </Tag>
  );
};

ButtonFancy.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default ButtonFancy;
