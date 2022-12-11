/**
 * @file StickyImageExplode.js
 */
import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
  useScroll,
  useTransform,
  motion,
  useMotionTemplate,
} from 'framer-motion';

import s from './StickyImageExplode.module.css';

const Placeholder = () => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{
        height: `calc(100% - 100vh)`,
      }}
    />
  );
};

const ImageContainer = ({
  className = 'bg-[#4E6868] bg-[url("/img/fpo-bg1.jpeg")]',
  borderRadius = '20vw',
  transform = 'translate(0px, 244.543px) scale(0.26, 0.26)',
  children = '',
}) => {
  return (
    <motion.div
      className={`sticky left-[5px] top-[5px] bg-cover bg-center bg-no-repeat duration-200 ease-[cubic-bezier(0,1,0,1)] will-change-transform ${className}`}
      style={{
        borderRadius,
        transform,
        transformOrigin: 'top center',
        width: `calc(100% - 10px)`,
        height: `calc(150rem - 10px)`,
      }}
    >
      {children}
    </motion.div>
  );
};

const ImageContainerInner = ({
  borderRadius = '20vw',
  transform = 'rotate(25deg) scale(0.63, 0.63)',
  className = 'bg-[#4E6868] bg-[url("/img/fpo-bg1.jpeg")]',
}) => {
  return (
    <motion.div
      className={`absolute left-0 top-0 h-full w-full origin-center bg-cover bg-center bg-no-repeat duration-200 ease-[cubic-bezier(0,1,0,1)] will-change-transform ${className}`}
      style={{
        borderRadius,
        transform,
      }}
    />
  );
};

const StickyImageExplode = ({
  tagName: Tag = 'div',
  className = 'absolute flex flex-col items-center justify-center w-full h-screen overflow-hidden',
  variant = 'default',
}) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  const borderRadiusT = useTransform(scrollYProgress, [0, 0.35], [20, 2]);
  const borderRadius = useMotionTemplate`${borderRadiusT}vw`;

  const scaleContainerT = useTransform(scrollYProgress, [0, 0.35], [0.26, 1]);
  const translateContainerT = useTransform(
    scrollYProgress,
    [0, 0.35],
    [244.543, 0],
  );
  const scaleInner0T = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    [0.63, 1, 0.85],
  );
  const scaleInner1T = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    [0.37, 1, 0.75],
  );
  const scaleInner2T = useTransform(
    scrollYProgress,
    [0, 0.35, 0.55],
    [0, 1, 0.65],
  );

  const rotateInner0T = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['25deg', '0deg'],
  );
  const rotateInner1T = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['50deg', '0deg'],
  );
  const rotateInner2T = useTransform(
    scrollYProgress,
    [0, 0.5],
    ['75deg', '0deg'],
  );

  const transformContainer = useMotionTemplate`translate(0px, ${translateContainerT}px) scale(${scaleContainerT}, ${scaleContainerT})`;
  const transformInner0 = useMotionTemplate`translate3d(0px, 0px, 0px) rotate(${rotateInner0T}) scale(${scaleInner0T}, ${scaleInner0T})`;
  const transformInner1 = useMotionTemplate`translate3d(0px, 0px, 0px) rotate(${rotateInner1T}) scale(${scaleInner1T}, ${scaleInner1T})`;
  const transformInner2 = useMotionTemplate`translate3d(0px, 0px, 0px) rotate(${rotateInner2T}) scale(${scaleInner2T}, ${scaleInner2T})`;

  return (
    <Tag
      className={`${s.sticky_image_explode} ${
        s[`sticky_image_explode__${variant}`]
      } ${className}`}
    >
      <div className="relative w-full h-full">
        <div
          className="absolute top-0 left-0 w-full h-screen overflow-scroll overflow-touch snap-y snap-proximity"
          ref={ref}
        >
          {/* Handles adjusting the height for scroll */}
          <Placeholder />
          <ImageContainer
            borderRadius={borderRadius}
            transform={transformContainer}
          >
            <ImageContainerInner
              borderRadius={borderRadius}
              transform={transformInner0}
            />
            <ImageContainerInner
              borderRadius={borderRadius}
              transform={transformInner1}
            />
            <ImageContainerInner
              borderRadius={borderRadius}
              transform={transformInner2}
            />
          </ImageContainer>
        </div>
      </div>
      <style jsx>{`
        .overflow-touch {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </Tag>
  );
};

StickyImageExplode.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default StickyImageExplode;
