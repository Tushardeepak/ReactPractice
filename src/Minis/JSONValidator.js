import React from 'react'

const isJSONStructureValid = (JSONString) => {
  let stack = []
  let inString = false

  for (let i = 0; i < JSONString.length; i++) {
    let currentChar = JSONString[i]

    // Needed for {} inside a string: "Hello {world", This should be ingored
    // if (currentChar === '"' && JSONString[i - 1] !== '\\') {
    //   inString = !inString
    // }

    if (!inString) {
      if (currentChar == '{' || currentChar == '[') {
        stack.push(currentChar)
      } else if (currentChar === '}' || currentChar === ']') {
        let checkChar = stack.pop()
        if (
          (currentChar == '}' && checkChar != '{') ||
          (currentChar == ']' && checkChar != '[')
        ) {
          return false
        }
      }
    }
  }

  return stack.length === 0
}

export const JSONValidator = () => {
  console.log('1: ', isJSONStructureValid('{"key": [1, 2, 3]}')) // true
  console.log('2: ', isJSONStructureValid('{[}]')) // false
  console.log('3: ', isJSONStructureValid('{"key": [1, 2, 3]')) // false
  console.log('4: ', isJSONStructureValid('"string"')) // true
  console.log(
    '5: ',
    isJSONStructureValid(
      '{ "key": "value", "arr": [1, 2, {"nested": "yes"}] }',
    ),
  ) // true
  console.log(
    '6: ',
    isJSONStructureValid('{ "key": "value", "arr": [1, 2, {"nested": "yes"} '),
  ) // false

  return <p>JSON Validator</p>
}
