/**
 * @file Eyeballs.js
 *
 * @see https://evacremers.com/the-lab/
 */
import React from 'react';
import PropTypes from 'prop-types';

import s from './Eyeballs.module.css';

import Eye from '../Eye';

const Eyeballs = ({
  tagName: Tag = 'div',
  className = 'w-full h-auto',
  variant = 'default',
  children = '',
}) => {
  return (
    <Tag className={`${s.eyeballs} ${s[`eyeballs__${variant}`]} ${className}`}>
      <div
        className="flex items-start justify-between w-full h-auto mx-auto pointer-events-none select-none align-center"
        style={{
          zIndex: 99,
        }}
      >
        <Eye />
        <Eye className="pl-20" />
      </div>
    </Tag>
  );
};

Eyeballs.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default Eyeballs;
