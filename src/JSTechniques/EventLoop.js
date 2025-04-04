import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  console.log('Start')

  setTimeout(() => {
    console.log('Inside timeout callback')
  }, 0)

  Promise.resolve().then(() => {
    console.log('Inside promise callback')
  })

  console.log('End')

  return 'Event loop'
}

ReactDOM.render(<App />, document.getElementById('root'))
