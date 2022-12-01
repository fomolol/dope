/**
 * @file VideoBackground.js
 */
import { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import { isMobileOnly, isTablet } from 'react-device-detect'
import enableInlineVideo from 'iphone-inline-video'

import styles from './VideoBackground.module.css'

import { useLayoutEffect } from '@/hooks/useIsoLayoutEffect'

const VideoBackground = ({
  className = 'absolute inset-0 z-0 object-cover w-screen h-screen min-h-screen overflow-hidden min-w-screen mix-blend-normal brightness-125',
  src = {
    mobile: '/video/2890361953_mobile',
    tablet: '/video/2890361919_ipad_768x1024_1',
    desktop: '/video/2890361919_desktop',
  },
  style = {},
  loop = true,
  forcePlay = false,
}) => {
  const bgVideoRef = useRef()
  // Desktop by default
  const [videoUrl, setVideoUrl] = useState(src?.desktop)
  // Enable iphone-inline-video
  useEffect(() => {
    if (bgVideoRef?.current) {
      enableInlineVideo(bgVideoRef.current, { iPad: true })
    }
  }, [videoUrl, bgVideoRef])

  let { mobile, tablet, desktop } = src
  if (!tablet) {
    tablet = desktop
  }
  const onLoadedData = (e) => {}

  useLayoutEffect(() => {
    if (isMobileOnly) {
      setVideoUrl(mobile)
    }
    if (isTablet) {
      setVideoUrl(tablet)
    }
  }, [src, desktop, mobile, tablet])

  // if video loops, restart it when the window receives focus
  // (fixes ios performance "feature" which pauses videos when window loses focus)
  const onFocus = useCallback(() => {
    if (!bgVideoRef || !bgVideoRef.current) return
    if (loop) {
      bgVideoRef.current.play()
    } //else {
    //   bgVideoRef.current.currentTime = bgVideoRef.current.duration - 0.1;
    //   bgVideoRef.current.pause();
    // }
  }, [loop])

  // if video does not loop, set the current time to the very end and pause it
  // when the window loses focus
  const onBlur = useCallback(() => {
    if (!bgVideoRef || !bgVideoRef.current) return
    if (!loop) {
      bgVideoRef.current.currentTime = bgVideoRef.current.duration - 0.5
      bgVideoRef.current.pause()
    }
  }, [loop])

  useEffect(() => {
    if (forcePlay) {
      window.addEventListener('focus', onFocus)
      window.addEventListener('blur', onBlur)
    }

    return () => {
      window.removeEventListener('focus', onFocus)
      window.removeEventListener('blur', onBlur)
    }
  }, [forcePlay, onBlur, onFocus])

  return (
    <>
      <video
        ref={bgVideoRef}
        playsInline
        autoPlay
        muted
        loop={loop}
        className={className}
        style={style}
        onLoadedData={onLoadedData}
      >
        {/* <source src={`${videoUrl}.webm`} type="video/webm" /> */}
        <source src={`${videoUrl}.mp4`} type="video/mp4" />
        <p className="flex items-center justify-center text-xl text-white max-w-1/2">
          Your browser does not support the video tag.
        </p>
      </video>
      <div className="absolute inset-0 flex items-center justify-center font-sans">
        <p className="flex h-[10vw] w-[50vw] flex-col items-center justify-center bg-black text-center leading-none">
          <span className="text-[7rem] font-black leading-none tracking-widest text-white">
            CENSORED
          </span>
          <span className="text-[1.5rem] font-light tracking-normal text-white/50">
            (watermarks)
          </span>
        </p>
      </div>
    </>
  )
}

VideoBackground.propTypes = {
  src: PropTypes.object,
  style: PropTypes.object,
  loop: PropTypes.bool,
  className: PropTypes.string,
}

export default VideoBackground
