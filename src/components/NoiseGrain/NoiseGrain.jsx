/**
 * @file NoiseGrain.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'

import s from './NoiseGrain.module.css'

const NoiseGrain = ({
  tagName: Tag = 'div',
  className = 'fixed inset-0 w-full h-full pointer-events-none',
  variant = 'grain', // noise, both
  noiseSrc = '../../public/noise.png',
  scratchesSrc = '../../public/scratches.webp',
}) => {
  return (
    <Tag
      className={`${s.noise_grain} ${
        s[`noise_grain__${variant}`]
      } ${className}`}
    >
      {(variant === 'noise' || variant === 'both') && (
        <div className={`h-full ${s['c-noise']}`}></div>
      )}
      {(variant === 'grain' || variant === 'both') && (
        <div className={`h-full w-full ${s['c-old']} mix-blend-multiply`}></div>
      )}
      <style jsx>{`
        .c-noise {
          /* animation: grain 6s steps(10) infinite; */
          background-image: url(${noiseSrc});
          background-repeat: repeat;
          height: 100%;
          left: -50%;
          opacity: 0.035;
          position: absolute;
          top: -100%;
          width: 300%;
          z-index: 100;
          pointer-events: none;
        }

        .c-old {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url(${scratchesSrc});
          opacity: 0.05;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          z-index: 150;
          pointer-events: none;
        }
      `}</style>
    </Tag>
  )
}

NoiseGrain.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['grain', 'noise', 'both']),
  children: PropTypes.node,
}

export default NoiseGrain
