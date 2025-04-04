import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  let cars = [
    {
      name: 'Honda',
      speed: 80,
    },

    {
      name: 'BMW',
      speed: 180,
    },

    {
      name: 'Audi',
      speed: 40,
    },

    {
      name: 'Ferrari',
      speed: 200,
    },
  ]

  //sorting according to numeric values
  cars.sort(function (a, b) {
    return a.speed - b.speed
  })

  console.log(cars)

  //sorting according to string values
  cars.sort((a, b) => {
    // Convert names to lowercase for case-insensitive sorting
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()

    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    return 0 // Names are equal
  })

  console.log(cars)

  return 'Sorting of objects'
}

ReactDOM.render(<App />, document.getElementById('root'))
