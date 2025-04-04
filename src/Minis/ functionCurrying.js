import React from 'react'
import ReactDOM from 'react-dom'

// Function currying is a technique in functional programming where a
// function is transformed into a sequence of functions, each taking a single argument.
// Instead of taking multiple arguments at once.
// A curried function takes one argument and returns a new function
// that takes the next argument, and so on, until all arguments are provided.

var sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b)
    }
    return a
  }
}

console.log(sum(1)(2)())
console.log(sum(1)(2)(5)())
console.log(sum(1)(2)(5)(5)(6)(1)(2)())

// React example
function App() {
  // The reason handleInputChange is able to log the correct
  // fieldName value for each input field is because of closures.

  // function handleChange(fieldName) {
  //   return function (event) {
  //     console.log(`${fieldName} is ${event.target.value}`)
  //   }
  // }
  const handleChange = (fieldName) => {
    return function (event) {
      console.log(`${fieldName} is ${event.target.value}`)
    }
  }
  return <input onChange={handleChange('User')} />

  // handleInputChange("User") returns a function that logs the input value.
  // The event handler dynamically logs values for different fields.
}

ReactDOM.render(<App />, document.getElementById('root'))

// Difference Between Currying and Partial Application
// Currying: Transforms a function into nested functions,
// each taking one argument.

// Partial Application: Pre-fills some arguments of a function but keeps
// it as a single function.

// function multiply(a, b, c) {
//   return a * b * c;
// }

// const multiplyBy2 = multiply.bind(null, 2);
// console.log(multiplyBy2(3, 4)); // Output: 24

// Here, multiplyBy2 is a partially applied function that already has a = 2.
