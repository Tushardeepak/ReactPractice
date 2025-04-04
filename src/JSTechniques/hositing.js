import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  // console.log(test1);   //Error, Not Defined (TDZ) Temporal Dead Zone
  // console.log(test4);   //Undefined
  // console.log(test2);   //ƒ test2() {}
  // console.log(host);    //Undefined

  // console.log(name1);   //Error, Cannot access (TDZ)
  // console.log(name2);   //Undefined
  // console.log(name3);   //Error, Cannot access (TDZ)

  // The TDZ is the period between the start of
  // a block and when a let or const variable is declared.
  // During this time, accessing the variable results in a
  // ReferenceError.

  // var is function-scoped:
  // It ignores block-level scope and only respects function scope.

  // While const prevents reassignment, it does not make objects or arrays immutable.

  const test1 = () => {}
  function test2() {}
  var host = function test3() {}
  var test4 = () => {}

  const name1 = 10
  var name2 = 10
  let name3 = 10

  return 'hello'
}

ReactDOM.render(<App />, document.getElementById('root'))
