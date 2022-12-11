/**
 * @file SineWave.js
 */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import s from './SineWave.module.css';

const SineWave = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
}) => {
  const ref = useRef();
  const { current: canvas } = ref;
  let ctx, wave, theta;

  useEffect(() => {
    ctx = canvas.getContext('2d');

    wave = {
      w: window.innerHeight / 2,
      length: 20000,
      amplitude: 80,
      speed: 0.05,
    };

    theta = 0;
  }, [canvas]);

  return (
    <Tag
      className={`${s.sine_wave} ${s[`sine_wave__${variant}`]} ${className}`}
    >
      <canvas
        ref={ref}
        style={{
          width: '100vw',
          height: '100vh',
        }}
      ></canvas>
    </Tag>
  );
};

SineWave.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default SineWave;
