/**
 * @file ShuffleText.js
 */
import { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useLayoutEffect } from '@fomolol/tacklebox';

import s from './ShuffleText.module.css';

const ShuffleText = ({
  tagName: Tag = 'h2',
  className = 'text-white transition-all duration-1000 ease-out font-stolzl hover:text-purple-400',
  variant = 'default',
  defaultText = 'Lorem ipsum',
  hoverText = 'Hello World',
  characters: _characters = '█▅▉▄▋▃▋▓▔▛▟▞▝▜▕▒▐',
}) => {
  const [targetText, setTargetText] = useState(defaultText);
  const [randomString, setRandomString] = useState(defaultText);

  const characters = useRef(_characters);
  const currentLength = useRef(0);
  const infoArray = useRef([]);

  /**
   * generateRandomString
   * Generates an initial random string to be used as the target text.
   */
  const generateRandomString = useCallback(() => {
    let string = '';
    while (string.length < currentLength.current) {
      string += characters.current.charAt(
        Math.floor(Math.random() * characters.current.length),
      );
    }
    setRandomString(string);
  }, []);

  /**
   * animateFadeBuffer
   * Generates a random string of the same length as the target text.
   */
  const animateFadeBuffer = useCallback(() => {
    if (!infoArray.current.length) {
      infoArray.current = [];

      for (let i = 0; i < targetText.length; i++) {
        infoArray.current.push({
          countdown: Math.floor(Math.random() * 12) + 1,
          correctLetter: targetText.charAt(i),
        });
      }
    }

    let useRandomCharacter = false;
    let string = '';

    for (let i = 0; i < infoArray.current.length; i++) {
      let fader = infoArray.current[i];

      if (fader.countdown > 0) {
        useRandomCharacter = true;

        fader.countdown--;

        string += characters.current.charAt(
          Math.floor(Math.random() * characters.current.length),
        );
      } else {
        string += fader.correctLetter;
      }
    }

    setRandomString(string);

    if (useRandomCharacter === true) {
      setTimeout(animateFadeBuffer, 50);
    } else {
      currentLength.current = 0;
      infoArray.current = [];
    }
  }, [targetText]);

  /**
   * animateIn
   * Sets the target text to the hover text.
   */
  const animateIn = useCallback(() => {
    if (currentLength.current < targetText.length) {
      currentLength.current += 2;

      if (currentLength.current > targetText.length) {
        currentLength.current = targetText.length;
      }

      generateRandomString();

      setTimeout(animateIn, 20);
    } else {
      setTimeout(animateFadeBuffer, 20);
    }
  }, [animateFadeBuffer, generateRandomString, targetText]);

  useLayoutEffect(() => {
    animateIn();
  }, [animateIn]);

  return (
    <Tag
      className={classNames(className, { hoverFont: targetText === hoverText })}
      onMouseEnter={() => setTargetText(hoverText)}
      onMouseLeave={() => setTargetText(defaultText)}
    >
      {randomString}
    </Tag>
  );
};

ShuffleText.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default ShuffleText;
