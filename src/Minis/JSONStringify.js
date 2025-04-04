import React from 'react'

const jsonString = (object) => {
  if (object == null) return 'null'
  if (typeof object == 'boolean' || typeof object == 'number')
    return String(object)
  if (typeof object == 'string') return `"${object.replace(/"/g, '\\"')}"`
  if (Array.isArray(object)) {
    const resultArray = object.map((obj) => jsonString(obj)).join(',')
    return `[${resultArray}]`
  }
  if (typeof object == 'object') {
    const objectValues = Object.keys(object)
      .map((obj) => `"${obj}": ${jsonString(object[obj])}`)
      .join(',')
    return `{${objectValues}}`
  }

  return undefined
}

export const JSONStringify = () => {
  // Example Cases
  console.log(jsonString({key: 'value', number: 42, bool: true}))
  // Output: {"key":"value","number":42,"bool":true}

  console.log(jsonString([1, 'hello', false, null]))
  // Output: [1,"hello",false,null]

  console.log(jsonString({nested: {a: 1, b: 'text'}}))
  // Output: {"nested":{"a":1,"b":"text"}}

  console.log(jsonString(null))
  // Output: "null"

  console.log(jsonString('Hello "World"'))
  // Output: "Hello \"World\""

  return <p>JSON Stringify</p>
}
