import React from 'react'

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true

  if (
    typeof obj1 != 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false
  }
  const keys1 = Object.keys(obj1)
  const keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) return false

  for (let key of keys1) {
    if (!keys2.includes(key)) return false // for arrays
    if (!deepEqual(obj1[key], obj2[key])) return false // for objects
  }

  return true
}

export const LodashEquals = () => {
  console.log(1, deepEqual({a: 1, b: {c: 2}}, {a: 1, b: {c: 2}})) // true
  console.log(2, deepEqual([1, 2, 3], [1, 2, 3])) // true
  console.log(3, deepEqual({a: 1, b: 2}, {a: 1, b: 3})) // false
  console.log(4, deepEqual({a: undefined}, {b: undefined})) // false
  return 'Lodash get'
}
