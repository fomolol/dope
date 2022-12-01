import * as React from 'react'
import { useForkRef } from '@fomolol/tacklebox'
import canvasEraserFactory from './CanvasEraserFactory'

const CanvasEraser = (
  {
    completeRatio = 1,
    enabled = true,
    onComplete = null,
    onProgress = null,
    size = 40,
    background = '#000',
    width,
    height,
    ...other
  },
  ref
) => {
  const [canvasEraser, setCanvasEraser] = React.useState(null)
  const canvasRef = React.useRef(null)
  const componentRef = useForkRef(canvasRef, ref)

  const options = React.useMemo(
    () => ({
      background,
      completeRatio,
      enabled,
      onComplete,
      onProgress,
      size,
      width,
      height,
    }),
    [
      background,
      completeRatio,
      enabled,
      onComplete,
      onProgress,
      size,
      width,
      height,
    ]
  )

  React.useEffect(() => {
    const canvas = canvasEraserFactory()
    setCanvasEraser(canvas)
  }, [])

  React.useEffect(() => {
    if (canvasEraser) {
      canvasEraser.init(canvasRef.current, options)
    }
  }, [canvasEraser, options])

  return (
    <>
      <canvas ref={componentRef} {...other} />
      <style jsx>{`
        canvas {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: ${width + 'px' || '100%'};
          height: ${height + 'px' || '100%'};
        }
      `}</style>
    </>
  )
}

export default React.forwardRef(CanvasEraser)
