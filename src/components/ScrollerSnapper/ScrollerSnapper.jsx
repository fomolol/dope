/**
 * @file ScrollerSnapper.js
 */
/**
 * @file Scroller.js
 */
import { useState, forwardRef, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useScroll, useTransform, useSpring, motion } from 'framer-motion';

import { useStore } from '@/store';
import { useWindowSize } from '@/hooks/useWindowSize';

import ScrollProgressLine from '@/components/ScrollProgressLine';
import Debugger from './Debugger';

import s from './ScrollerSnapper.module.css';

/**
 * SnapParent
 */
const SnapParent = forwardRef(({ ...props }, ref) => (
  <div
    ref={ref}
    {...props}
    className={`overflow-touch absolute h-screen w-full snap-y snap-mandatory overflow-scroll`}
  >
    {props.children}
    <style jsx>{`
      .overflow-touch {
        -webkit-overflow-scrolling: touch;
      }
    `}</style>
  </div>
));

const ScrollerSnapper = ({
  tagName: Tag = motion.div,
  className = 'relative z-0 h-screen min-w-full pointer-events-auto',
  variant = 'default',
  children = '',
  damping = 15,
  mass = 0.15,
  stiffness = 25,
  disable = false,
  debug = true,
  ...rest
}) => {
  const { scrollerEnabled, scrollRef } = useStore();
  const { height } = useWindowSize();
  const [scrollYValue, setScrollYValue] = useState(0);
  const [scrollYProgressValue, setScrollYProgressValue] = useState(0);

  const { scrollY, scrollYProgress } = useScroll({
    container: scrollRef,
  }); // measures how many pixels user has scrolled vertically

  const pageRange = [0.1, 0.25, 0.5, 1];
  const lengthRange = ['15vh', '25vh', '50vh', '100vh'];
  const calcHeight = useTransform(scrollYProgress, pageRange, lengthRange);

  useEffect(() => {
    scrollY.onChange(v => setScrollYValue(v));
    scrollYProgress.onChange(v => setScrollYProgressValue(v));
  }, [scrollY, scrollYProgress]);

  return (
    <>
      {debug && (
        <Debugger
          calcHeight={calcHeight}
          scrollY={scrollYValue}
          scrollYProgress={scrollYProgressValue}
        />
      )}
      <Tag
        className={`${s.scroller_snapper} ${
          s[`scroller_snapper__${variant}`]
        } ${className}`}
        id="scroll-container"
        {...rest}
      >
        <ScrollProgressLine
          width={scrollYProgress.getVelocity()}
          forwardRef={scrollRef}
        />
        <SnapParent ref={scrollRef}>{children}</SnapParent>
      </Tag>
      {/* blank div that has a dynamic height based on the content's inherent height */}
      {/* this is neccessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      {scrollRef.current && height ? (
        <div
          className="pointer-events-none"
          style={
            disable || !scrollerEnabled
              ? { height: '0px' }
              : { height: `${height}px` }
          }
        />
      ) : null}
    </>
  );
};

ScrollerSnapper.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default ScrollerSnapper;
