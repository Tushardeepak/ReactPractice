import React from 'react'

const get = (obj, path, defaultValue) => {
  const pathName = Array.isArray(path) ? path : path.split('.')

  const result = pathName.reduce(
    (accumulator, currentValue) => accumulator && accumulator[currentValue],
    obj, // Starting value
  )

  return result === undefined ? defaultValue : result
}

const set = (obj, path, value) => {
  const pathName = Array.isArray(path) ? path : path.split('.')

  pathName.reduce((acc, curr, index) => {
    if (index == pathName.length - 1) {
      acc[curr] = value
    } else if (!acc[curr] || typeof acc[curr] != 'object') {
      // If the key doesnt exist or is not an object, we will
      // store it as an object only
      acc[curr] = {}
    }
    return acc[curr]
  }, obj)

  return obj
}

export const LodashGetAndSet = () => {
  const data = {
    user: {
      profile: {
        name: 'John Doe',
        age: 30,
      },
    },
  }
  // console.log(get(data, 'user.profile.name', 'Not found'))
  // console.log(get(data, 'user.profile.area', 'Not found'))
  const newData = set(data, 'user.profile.area', '2235 sqft')
  const newData1 = set(newData, 'user.profile.area.loc', 'Hyd')
  console.log(newData1)
  return 'Lodash get'
}
