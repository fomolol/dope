/**
 * @file LoaderBar.js
 */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useLayoutEffect } from '@fomolol/tacklebox'

import styles from './LoaderBar.module.css'

const LoaderBar = ({
  tagName: Tag = 'div',
  className = '',
  variant = 'default',
  children = '',
  loadingPercentage = 0,
  onLoadProgress = (percentage) => {},
  onLoaderHideCallback = () => {},
  infinite = false,
  time = 25,
}) => {
  // const [reverseAnimation, setReverseAnimation] = React.useState(0);
  const startingPercentage = loadingPercentage
  const [percentage, setPercentage] = useState(startingPercentage)

  useLayoutEffect(() => {
    let timer
    if (!timer) {
      timer = setTimeout(() => {
        const tP = percentage + 0.5
        setPercentage(tP)
        onLoadProgress(tP)
      }, time)
    }

    if (infinite && percentage >= 100) {
      setPercentage(0)
      return
    } else if (percentage >= 100) {
      onLoaderHideCallback()
      clearTimeout(timer)
      return
    }

    return () => clearTimeout(timer)
  }, [infinite, percentage])

  // const hideLoader = () => {
  //   setReverseAnimation(1);
  // };

  return (
    <Tag
      className={`${styles.loader_bar} ${
        styles[`loader_bar__${variant}`]
      } z-infinity ${className}`}
    >
      <div className="flex flex-col items-center loader-modal--container">
        <motion.div className="h-[8px] w-[200px] overflow-hidden bg-black">
          <div
            className="h-full bg-gray-600 loading-status-bar"
            style={{
              // this is tied to the of the orange bar so width should be a loading percent variable
              width: `${infinite ? percentage : percentage}%`,
            }}
          ></div>
        </motion.div>

        {children}
      </div>
    </Tag>
  )
}

LoaderBar.propTypes = {
  tagName: PropTypes.string,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node,
}

export default LoaderBar
