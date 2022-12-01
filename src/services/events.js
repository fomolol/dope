// events.js

export function on(eventType, listener) {
  document.addEventListener(eventType, listener)
}

export function off(eventType, listener) {
  document.removeEventListener(eventType, listener)
}

export function once(eventType, listener) {
  on(eventType, handleEventOnce)

  function handleEventOnce(event) {
    listener(event)
    off(eventType, handleEventOnce)
  }
}

export function trigger(eventType, data) {
  const event = new CustomEvent(eventType, { detail: data })
  document.dispatchEvent(event)
}

export default { on, once, off, trigger }
