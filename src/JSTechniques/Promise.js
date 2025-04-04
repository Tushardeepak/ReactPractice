import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const success = true
  console.log('Main Start')

  // Promise made
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        console.log('Success promise')
        resolve(1)
      } else {
        console.log('Failed promise')
        reject('Failed')
      }
    }, 5000)
  })

  console.log('Program started')

  // Promise used
  myPromise
    .then((result1) => {
      const res1 = result1 * 2
      console.log('Result 1 -> ', res1)
      return res1
    })
    .then((result2) => {
      // result2 is the value return from above .then
      const res2 = result2 * 2
      console.log('Result 2 -> ', res2)
      return res2
    })
    .catch((err) => {
      console.log('Error occurred: ', err)
    })
    .finally(() => {
      // Always executes
      console.log('This is end')
    })
  console.log('Program Ended')
  return 'Promises'
}

ReactDOM.render(<App />, document.getElementById('root'))
