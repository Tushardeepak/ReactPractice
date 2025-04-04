import React, {useState, useRef, useImperativeHandle, forwardRef} from 'react'

export const ImperativeHandle = () => {
  return <Parent />
}

const Parent = () => {
  const countRef = useRef()
  return (
    <div>
      <Child name="Tushar" ref={countRef} />
      <br />
      <button onClick={() => countRef.current?.reset()}> Reset </button>
    </div>
  )
}

const Child = forwardRef(({name}, ref) => {
  // No extra prop needed because forwardRef is added

  const [count, setCount] = useState(0)

  // The reset funtion is exposed to parent component.
  // This is a anti-pattern, should be used carefully
  useImperativeHandle(ref, () => ({
    reset: () => {
      setCount(0)
    },
  }))
  return (
    <div>
      Counter {name}: {count}
      <br />
      <br />
      <button onClick={() => setCount(count + 1)}> Increment </button>
    </div>
  )
})
