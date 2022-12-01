/**
 * @file Text.js
 */
import * as React from 'react'
import PropTypes from 'prop-types'
import { useLayoutEffect } from '@fomolol/tacklebox'

import styles from './Text.module.css'

import SplitFade from './SplitFade'
import SplitOverflow from './SplitOverflow'

const Text = ({
  tagName: Tag = 'h2',
  className = '',
  variant = 'default',
  children = '',
  type,
}) => {
  const text = React.useRef()
  const [newText, setNewText] = React.useState(null)
  const hasTextSpans = React.useRef(false)

  const innerHtml = React.useRef()

  useLayoutEffect(() => {
    if (text.current) {
      innerHtml.current = text.current?.innerHTML.replaceAll('<br>', ' _ ')
    }
  }, [text])

  useLayoutEffect(() => {
    if (
      innerHtml.current &&
      !newText &&
      text.current &&
      !hasTextSpans.current
    ) {
      if (type === 'fade-letter') {
        const letters = innerHtml.current.split('')
        setNewText(letters)
      } else if (type === 'fade-word') {
        const words = innerHtml.current.split(' ')
        setNewText(words)
      } else if (type === 'fade-block') {
        setNewText('hide children')
      } else if (type === 'overflow-word') {
        const words = innerHtml.current.split(' ')
        setNewText(words)
      }
    }
  }, [text, innerHtml, type])

  const renderText = React.useMemo(
    () =>
      newText && type === 'fade-letter' ? (
        newText?.map((letter, index) => (
          <React.Fragment key={`fade-letter-${index}`}>
            {letter === '_' ? <br /> : <SplitFade>{letter || ' '}</SplitFade>}
          </React.Fragment>
        ))
      ) : type === 'fade-word' ? (
        newText?.map((word, index) => (
          <React.Fragment key={`fade-word-${index}`}>
            {word === '_' ? (
              <br />
            ) : (
              <>
                <SplitFade>{word}</SplitFade>
                <SplitFade> </SplitFade>
              </>
            )}
          </React.Fragment>
        ))
      ) : type === 'fade-block' ? (
        <SplitFade>{children}</SplitFade>
      ) : type === 'overflow-word' ? (
        newText?.map((word, index) => (
          <React.Fragment key={`overflow-word-${index}`}>
            {word === '_' ? (
              <br />
            ) : (
              <span>
                <SplitOverflow>{word}</SplitOverflow>
                <SplitOverflow> </SplitOverflow>
              </span>
            )}
          </React.Fragment>
        ))
      ) : null,
    [newText, type, children]
  )

  return (
    <Tag
      ref={text}
      className={`${styles.text} ${styles[`text__${variant}`]} ${className}`}
    >
      {!renderText ? children : renderText}
    </Tag>
  )
}

Text.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default Text
