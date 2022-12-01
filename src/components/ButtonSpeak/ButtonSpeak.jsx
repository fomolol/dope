/**
 * @file ButtonSpeak.js
 */
import * as React from 'react'
import { motion } from 'framer-motion'

import s from './ButtonSpeak.module.css'

import Edit from '../Icons/Edit'

const ButtonSpeak = (
  {
    tagName: Tag = 'button',
    className = 'fixed flex items-center justify-center rounded-full outline-none dark:focus:outline-white focus:outline-black focus:outline-4 outline-dashed right-12 bottom-12 duration-400',
    variant = 'default',
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    onClick = () => {},
    motionVariants = {
      initial: {
        opacity: 0,
      },
      animate: {
        opacity: 1,
      },
      exit: {
        opacity: 0,
      },
      tap: { scale: 0.75, duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      hover: { scale: 1.25, duration: 0.45, ease: [0.4, 0, 0.2, 1] },
      focus: { scale: 1.25, duration: 0.45, ease: [0.4, 0, 0.2, 1] },
    },
  },
  ref
) => {
  return (
    <Tag
      className={`${s.button_speak} ${
        s[`button_speak__${variant}`]
      } ${className} h-[84px] w-[84px]`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      ref={ref}
    >
      <motion.div
        whileTap="tap"
        whileHover="hover"
        whileFocus="focus"
        animate="animate"
        exit="exit"
        initial="initial"
        variants={motionVariants}
        className="absolute top-0 left-0 w-full h-full transition ease-out bg-black rounded-full dark:bg-white active:bg-red-800 hover:bg-red-ff duration-400"
      />
      <Edit className="pointer-events-none absolute fill-white dark:fill-black w-[24px] h-[24px]" />
    </Tag>
  )
}

export default React.memo(React.forwardRef(ButtonSpeak))
