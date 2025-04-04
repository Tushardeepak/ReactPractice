import React from 'react'

// Same implementation for apply pollyfill
Function.prototype.customCall = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not callable function`)
  }

  // If context is null or undefined, default to global object (window in browser, global in Node.js)
  context = context || globalThis

  // Assign the function reference to the object
  context.refFunction = this

  // Invoke the function with the passed arguments
  const result = context.refFunction(...args) // For apply (...(args || []))

  // Remove the temporary property to clean up
  delete context.refFunction

  // Return result in case the function has a return value
  return result
}

Function.prototype.customBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not callable function`)
  }

  context = context || globalThis

  context.refFunction = this

  function boundedFunc(...otherArgs) {
    context.refFunction(...args, ...otherArgs)
  }

  return boundedFunc
}

Function.prototype.perfectBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError(`${this} is not a callable function`)
  }

  const fn = this // Store reference to the original function

  function boundedFunc(...otherArgs) {
    // If called with `new`, use `this` as the context instead of `context`
    const finalContext =
      this instanceof boundedFunc ? this : context || globalThis

    // Use a temporary property to avoid modifying `context` permanently
    const tempKey = Symbol()
    finalContext[tempKey] = fn

    // Execute the function
    const result = finalContext[tempKey](...args, ...otherArgs)

    // Cleanup
    delete finalContext[tempKey]

    return result
  }

  // Preserve prototype chain, so instances created via `new` inherit correctly
  boundedFunc.prototype = Object.create(fn.prototype)

  return boundedFunc
}

export const FunctionPollyFills = () => {
  function mainFunc(param1, param2) {
    console.log(
      `${this.name} -> ref and ${param1} -> args and ${param2} -> args`,
    )
  }

  const obj = {
    name: 'Tushar',
  }

  // console.log('My Call: ')
  // mainFunc.customCall(obj, 28, 200)

  // console.log('Bind: ')
  // const newFunc = mainFunc.bind(obj) // Can pass 20, 30 here also
  // newFunc(20, 30)

  console.log('My Bind: ')
  const newFunc = mainFunc.customBind(obj, 20)
  newFunc(30)

  return "Function's PollyFills"
}
