/**
 * @file StickyDrawer.js
 */
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import colors from 'nice-color-palettes';

import s from './StickyDrawer.module.css';

const Container = ({
  caption = 'Hello World',
  description = 'Do eiusmod ex dolore velit occaecat commodo magna esse.',
  itemHeight = '37.25rem',
  totalItems = 6,
  index = 0,
  backgroundColor = '#54504b',
  color = '#0a000f',
}) => {
  let top = 0;
  let bottom = 0;
  switch (index) {
    case 0:
      bottom = `calc((100vh - ${itemHeight}) * 5 / ${totalItems})`;
      break;
    case 1:
      top = `calc((100vh - ${itemHeight}) / ${totalItems})`;
      bottom = `calc((100vh - ${itemHeight}) * 4 / ${totalItems})`;
      break;
    case 2:
      top = `calc((100vh - ${itemHeight}) * 2 / ${totalItems})`;
      bottom = `calc((100vh - ${itemHeight}) / 2)`;
      break;
    case 3:
      top = `calc((100vh - ${itemHeight}) / 2)`;
      bottom = `calc((100vh - ${itemHeight}) * 2 / ${totalItems})`;
      break;
    case 4:
      top = `calc((100vh - ${itemHeight}) * 4 / ${totalItems})`;
      bottom = `calc((100vh - ${itemHeight}) * 1 / ${totalItems})`;
      break;
    case 5:
      top = `calc((100vh - ${itemHeight}) * 5 / ${totalItems})`;
      break;
  }
  return (
    <div
      className="sticky"
      style={{
        top,
        bottom,
        height: `calc((100vh - ${itemHeight}) / ${totalItems})`,
      }}
    >
      <div
        className="absolute top-0 left-0 w-full"
        style={{
          height: itemHeight,
        }}
      >
        <div
          className="item-block absolute flex w-full flex-col items-center justify-between rounded-[24px] text-center font-light leading-[1.43] before:absolute before:left-0 before:top-[0.875rem] before:right-0 before:font-serif before:text-[2vw] before:font-light before:italic before:text-white before:mix-blend-difference"
          style={{
            backgroundColor,
            color,
            height: itemHeight,
          }}
        >
          <div className="caption mt-[5.875rem] text-center text-[13vw] font-black leading-[1]">
            {caption}
          </div>
          <div
            className="description mb-12 w-1/2 text-center text-[1.25vw] uppercase leading-[1.14]"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
      <style jsx>{`
        .item-block::before {
          content: '(0' counter(blocks) ')';
          counter-increment: blocks;
          /* -webkit-text-stroke: 1px #000; */
        }
      `}</style>
    </div>
  );
};

const Placeholder = ({ totalItems = 6, itemHeight = '37.25rem' }) => {
  return (
    <div
      className="placeholder"
      style={{
        height: `calc(${itemHeight} - (100vh - ${itemHeight}) / ${totalItems})`,
      }}
    ></div>
  );
};

const Item = ({ items = [], caption, description, index }) => {
  return (
    <>
      <Container
        caption={caption}
        description={description}
        // backgroundColor={backgroundColor}
        backgroundColor={colors[0][index]}
        totalItems={items.length}
        index={index}
      />
      <Placeholder totalItems={items.length} />
    </>
  );
};

const StickyDrawer = ({
  tagName: Tag = motion.div,
  className = 'relative flex flex-col items-center justify-between w-full h-auto -mt-5',
  variant = 'default',
  items = [
    {
      caption: 'Empathize',
      description:
        'First, we conduct user research in order to understand your audience',
      backgroundColor: '#54504b',
    },
    {
      caption: 'Define',
      description:
        'Next, we&apos;ll review our research and look for flaws to resolve',
      backgroundColor: '#e2e3dc',
    },
    {
      caption: 'Brainstorm',
      description:
        'Then we&apos;l think of some creative ideas based around our data',
      backgroundColor: '#a69897',
    },
    {
      caption: 'Prototype',
      description:
        'Time to build a tactile representation that we think solves the issues',
      backgroundColor: '#f46e48',
    },
    {
      caption: 'Testing',
      description:
        'We&apos;ll do a test run and then collect additional data from the users',
      backgroundColor: '#adccbf',
    },
    {
      caption: 'Implement',
      description:
        'Finally, we&apos;ll deliver the finished product and put it into action',
      backgroundColor: '#c3b59f',
    },
  ],
  itemHeight = '37.25rem',
  triggerOnce = false,
}) => {
  const { ref, inView, entry } = useInView({
    threshold: 0.15,
    triggerOnce: triggerOnce,
  });

  return (
    <Tag
      ref={ref}
      className={`${s.sticky_drawer} ${
        s[`sticky_drawer__${variant}`]
      } ${className}`}
      // style={{
      //   paddingTop: `calc(${itemHeight} - 5.5rem)`,
      //   paddingBottom: `calc(${itemHeight} + 5.5rem)`,
      // }}
    >
      <div className="relative w-full h-screen">
        <div className="absolute top-0 left-0 w-full h-screen overflow-scroll overflow-touch snap-y snap-proximity">
          <div
            className="before:border-t-none item-list block before:relative before:block before:rounded-2xl before:content-[''] after:relative after:block after:w-full after:content-['']"
            style={{
              counterReset: 'blocks',
              margin: `calc((100vh - ${itemHeight}) * -1) 0`,
            }}
          >
            {items.map(({ caption, description, backgroundColor }, i) => (
              <Item
                key={`item-${i}`}
                items={items}
                index={i}
                caption={caption}
                description={description}
                backgroundColor={backgroundColor}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .block::before {
          height: calc(100vh - ${itemHeight});
          width: calc(100% + 10px);
          left: -5px;
        }
        .block::after {
          height: calc(100vh - ${itemHeight});
        }
        .overflow-touch {
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </Tag>
  );
};

StickyDrawer.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
};

export default StickyDrawer;
