/**
 * @file Typography.js
 */
import React from 'react'
import { motion } from 'framer-motion'
import { easeInOutQuad } from 'lib/easing'

import s from './Typography.module.css'

/**
 * getTheme
 * Handles returning the proper theme colors
 * @param {*} variant
 */
const getTheme = (variant) => {
  switch (variant) {
    case 'dark':
      variantClassName = 'text-black'
      break
    case 'light':
      variantClassName = 'text-white'
      break
    default:
      break
  }
}

const BaseType = ({
  tagName: Tag,
  styles,
  className,
  typeClassName,
  duration = 1,
  delay = 1,
  html,
  children,
}) => {
  return typeof html !== 'undefined' ? (
    <Tag
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration,
        delay,
        ease: easeInOutQuad,
      }}
      className={`${styles} ${typeClassName} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <Tag
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration,
        delay,
        ease: easeInOutQuad,
      }}
      className={`${styles} ${typeClassName} ${className ? className : ''}`}
    >
      {children}
    </Tag>
  )
}

export const H1 = ({
  className = '',
  children,
  duration = 1,
  delay = 1,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.h1}
      styles={s.h1}
      className={className}
      typeClassName="h1"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const H2 = ({
  className,
  children,
  duration = 1,
  delay = 1.15,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.h2}
      styles={s.h2}
      className={className}
      typeClassName="h2"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const H3 = ({
  className,
  children,
  duration = 1,
  delay = 1.15,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.h3}
      styles={s.h3}
      className={className}
      typeClassName="h3"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const H4 = ({
  className,
  children,
  duration = 1,
  delay = 1.25,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.h4}
      styles={s.h4}
      className={className}
      typeClassName="h4"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const H5 = ({
  className,
  children,
  duration = 1,
  delay = 1.35,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.h5}
      styles={s.h5}
      className={className}
      typeClassName="h5"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const H6 = ({
  className,
  children,
  duration = 1,
  delay = 1.25,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.h6}
      styles={s.h6}
      className={className}
      typeClassName="h6"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const P1 = ({
  className,
  children,
  duration = 1,
  delay = 1.45,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.p}
      styles={s.p1}
      className={className}
      typeClassName="p1"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const P2 = ({
  className,
  children,
  duration = 1,
  delay = 1.45,
  html,
}) => {
  return (
    <BaseType
      tagName={motion.p}
      styles={s.p2}
      className={className}
      typeClassName="p2"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const P3 = ({
  html,
  className,
  children,
  duration = 1,
  delay = 1.45,
}) => {
  return (
    <BaseType
      tagName={motion.p}
      styles={s.p3}
      className={className}
      typeClassName="p3"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}

export const P4 = ({
  html,
  className,
  children,
  duration = 1,
  delay = 1.45,
}) => {
  return (
    <BaseType
      tagName={motion.p}
      styles={s.p4}
      className={className}
      typeClassName="p4"
      duration={duration}
      delay={delay}
      html={html}
    >
      {children}
    </BaseType>
  )
}
