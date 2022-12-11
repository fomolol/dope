/**
 * @file CookieBanner.js
 */
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useLayoutEffect, useCookieBanner } from '@fomolol/tacklebox';

import s from './CookieBanner.module.css';

const CookieBanner = ({
  tagName: Tag = motion.div,
  className = '',
  visible = true,
  variant = 'default',
  onClick = () => console.log('clicked'),
  themeColor = 'light',
  cookieAcceptKey = 'fomolol-cookie-accepted',
  onDeclined = () => console.log('User declined the cookies'),
  onAccepted = () => console.log('User accepted the cookies'),
  children = 'Do fugiat enim dolore culpa ea excepteur ut esse dolor laborum deserunt amet sint pariatur. Ex minim eiusmod ad esse veniam magna labore deserunt Lorem. Excepteur cupidatat et consequat sint ipsum pariatur duis.',
}) => {
  const cookieConfig = {
    cookieAcceptKey,
    onDeclined,
    onAccepted,
  };
  const accepted = useCookieBanner(cookieConfig);
  // const prevThemeColor = useRef(themeColor)

  const baseClassName =
    'fixed flex items-center justify-center w-full transition duration-500 ease-in-out z-hud bottom-12 hover:drop-shadow-md';

  return (
    <AnimatePresence>
      {visible && !accepted ? (
        <Tag
          className={`${s.cookie_banner} ${
            s[`cookie_banner__${variant}`]
          } ${baseClassName} ${className}`}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          // onPointerOver={() => {
          //   setCursorStyle('hover')
          //   setCursorColor('light')
          // }}
          // onPointerOut={() => {
          //   setCursorStyle('default')
          //   setCursorColor(prevThemeColor.current)
          // }}
        >
          <div className="flex h-auto w-[90%] items-center rounded-bl-2xl rounded-tr-2xl bg-white p-4 leading-snug md:w-1/2 md:p-8">
            <p className="max-w-[70%] text-[9px] md:max-w-[85%] md:text-[13px]">
              {children}
            </p>
            <button
              onClick={onAccepted}
              // onPointerOver={() => {
              //   setCursorColor('dark')
              // }}
              // onPointerOut={() => {
              //   setCursorColor(prevThemeColor.current)
              // }}
              className="bg-purple-brand-light hover:bg-purple-brand-dark ml-auto h-[50px] rounded-full px-8 text-[12px] uppercase text-white transition duration-500 ease-in-out hover:text-white"
            >
              Ok
            </button>
          </div>
        </Tag>
      ) : null}
    </AnimatePresence>
  );
};

CookieBanner.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default CookieBanner;
