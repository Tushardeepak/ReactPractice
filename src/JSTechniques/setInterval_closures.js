import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // setCounter((prev) => prev + 1)
      // setCounter(counter + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [counter])

  return <p>Counter : {counter}</p>
}

ReactDOM.render(<App />, document.getElementById('root'))
