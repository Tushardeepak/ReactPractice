import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  const p1 = new Promise((resolve, reject) =>
    setTimeout(() => resolve('P1 is resolved'), 1000),
  )
  const p2 = new Promise((resolve, reject) =>
    setTimeout(() => reject('P2 is rejected'), 2000),
  )
  const p3 = new Promise((resolve, reject) =>
    setTimeout(() => resolve('P3 is resolved'), 3000),
  )

  // Promise.all => This will take 3sec to return result
  Promise.all([p1, p2, p3])
    .then((res) => console.log('Promise.all success: ', res))
    .catch((err) => console.log('Promise.all error: ', err))

  // Promise.allSettled => This will take 3sec to return result
  Promise.allSettled([p1, p2, p3])
    .then((res) => console.log('Promise.allSettled success: ', res))
    .catch((err) => console.log('Promise.allSettled error: ', err))

  // Promise.race => This is printed first as it will take only 1sec to return value
  Promise.race([p1, p2, p3])
    .then((res) => console.log('Promise.race success: ', res))
    .catch((err) => console.log('Promise.race error: ', err))

  // Promise.any => This is printed second because it will also take only 1sec to return value
  Promise.any([p1, p2, p3])
    .then((res) => console.log('Promise.any success: ', res))
    .catch((err) => console.log('Promise.any error: ', err))

  return 'Promise methods'
}
ReactDOM.render(<App />, document.getElementById('root'))
