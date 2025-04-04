import React from 'react'

// If we used a normal Map, the cloned objects would stay in memory forever.
// With WeakMap, once the cloned objects are no longer used,
// they are automatically removed from memory.

// WeakMap prevents memory leaks by allowing the garbage collector to remove
// objects when they are no longer needed.

const deepClone = (obj, hash = new WeakMap()) => {
  if (obj === null || typeof obj !== 'object') return obj
  if (hash.has(obj)) return hash.get(obj)

  const clone = Array.isArray(obj) ? [] : {}
  // Clone is needed because it avoid modifying the original object
  hash.set(obj, clone)

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // Only copyies own properties not inherited properties
      clone[key] = deepClone(obj[key], hash)
    }
  }

  return clone
}

export const LodashDeepClone = () => {
  const obj = {
    a: 1,
    b: {c: 2},
    arr: [3, 4],
  }
  obj.self = obj // Circular reference

  const cloned = deepClone(obj)

  console.log(cloned) // { a: 1, b: { c: 2 }, arr: [3, 4], self: [Circular] }
  console.log(cloned === obj) // false (Deep Cloned)
  console.log(cloned.b === obj.b) // false (Deep Cloned)
  return 'Lodash DeepClone'
}
