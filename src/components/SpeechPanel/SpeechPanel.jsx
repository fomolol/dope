/**
 * @file SpeechPanel.js
 */
import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import s from './SpeechPanel.module.css';

const ButtonSpeakBackground = ({ onAnimationComplete }) => {
  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      animate={{
        scale: 100,
      }}
      exit={{
        scale: 1,
      }}
      transition={{
        duration: 1,
        ease: [0.4, 0.0, 0.2, 1.0],
      }}
      onAnimationComplete={onAnimationComplete}
      className={`fixed right-12 bottom-12 h-[84px] w-[84px] origin-center rounded-full transition-all ease-out`}
    >
      <div
        className={`absolute bottom-0 right-0 h-full w-full rounded-full bg-red-ff transition duration-500 ease-out dark:bg-blue-500`}
      />
    </motion.div>
  );
};

const SpeechPanel = ({
  tagName: Tag = 'div',
  className = 'absolute top-0 left-0 flex w-full h-full overflow-hidden',
  variant = 'default',
  active = false,
  questions = [
    'Ready to mint?',
    'Want to read the FAQ?',
    'Do you like turtles?',
    'What do you think of NFTs?',
  ],
}) => {
  const [isReady, setIsReady] = useState(false);
  const onAnimationComplete = useCallback(() => {
    if (!isReady) {
      console.log('Animation Start Complete');
      setIsReady(true);
    } else {
      console.log('Animation End Complete');
      setIsReady(false);
    }
  }, [isReady]);

  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      duration: 0.5,
      ease: 'easeOut',
      staggerChildren: 1.5,
    },
  };

  var listVariants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
    transition: {
      duration: 1,
      ease: 'easeOut',
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {active && (
        <Tag
          className={`${s.speech_panel} ${
            s[`speech_panel__${variant}`]
          } ${className}`}
          key="speech-panel"
        >
          <ButtonSpeakBackground onAnimationComplete={onAnimationComplete} />
          <AnimatePresence>
            {isReady && (
              <motion.ul
                initial="hide"
                animate="show"
                exit="hide"
                variants={variants}
                key="question-panel"
                layout
                className="relative grid grid-flow-row grid-cols-3 mx-4 text-2xl text-white gap-y-4 gap-x-4"
              >
                {questions.map((question, index) => (
                  <motion.li
                    initial="hide"
                    animate="show"
                    exit="hide"
                    variants={listVariants}
                    key={`q-${index}`}
                    className="flex items-center justify-center px-4 py-2 text-center text-black transition-all duration-500 ease-out rounded-2xl bg-white/90 drop-shadow-md backdrop-blur-lg hover:drop-shadow-2xl"
                  >
                    {question}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </Tag>
      )}
    </AnimatePresence>
  );
};

SpeechPanel.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default SpeechPanel;
