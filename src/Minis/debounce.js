import React from 'react'

// Debounce waits until the user stops triggering an event before executing.
// Throttle ensures execution at regular intervals even if events keep firing.
// Use debounce for user input events (like typing in a search box).
// Use throttle for continuously firing events (like scrolling or resizing).

function debounce(func, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => func.apply(this, args), delay)
  }
}

export const DebounceComp = () => {
  function printValue(value) {
    if (value !== '') {
      console.log('Input is:', value)
    }
  }
  const debouncedSearch = debounce(printValue, 500)

  return (
    <p>
      <input onChange={(e) => debouncedSearch(e.target.value)} />
    </p>
  )
}

function throttle(func, interval) {
  let lastExecuted = 0
  return function (...args) {
    const now = Date.now()
    if (now - lastExecuted >= interval) {
      func.apply(this, args)
      lastExecuted = now
    }
  }
}

// Usage example: Scroll event
const throttledScroll = throttle(() => {
  console.log('Scrolling...')
}, 1000)

window.addEventListener('scroll', throttledScroll)
