import * as _ from 'lodash'

/**
 * ldebounce
 * debounce using lodash
 * @returns
 */
export const ldebounce = (cb, ms = 500) => {
  return _.debounce(cb, ms, {
    leading: true,
  })
}

/* Scale a value from one range to another
 * Example of use:
 *
 * // Convert 33 from a 0-100 range to a 0-65535 range
 * var n = scaleValue(33, [0,100], [0,65535]);
 *
 * // Ranges don't have to be positive
 * var n = scaleValue(0, [-50,+50], [0,65535]);
 *
 * Ranges are defined as arrays of two values, inclusive
 *
 * The ~~ trick on return value does the equivalent of Math.floor, just faster.
 *
 */
export const scaleValue = (value, from, to) => {
  var scale = (to[1] - to[0]) / (from[1] - from[0])
  var capped = Math.min(from[1], Math.max(from[0], value)) - from[0]
  return ~~(capped * scale + to[0])
}

/**
 * map
 * Map number x from range [a, b] to [c, d]
 * @param {*} x
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} d
 * @returns
 */
export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

/**
 * lerp
 * Linear interpolation
 * @param {*} a
 * @param {*} b
 * @param {*} n
 * @returns
 */
export const lerp = (a, b, n) => (1 - n) * a + n * b

export const clamp = (num, min, max) =>
  num <= min ? min : num >= max ? max : num

/**
 * getMousePos
 * Gets the mouse position
 * @param {*} ev
 * @returns
 */
export const getMousePos = (ev) => {
  return {
    x: ev.clientX,
    y: ev.clientY,
  }
}

export default {
  ldebounce,
  scaleValue,
  map,
  lerp,
  clamp,
  getMousePos,
}
