import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom'

//UseCallback is used to freeze the function and so
//it will not re rerendered again and again

function App() {
  const [count, setCount] = useState(0);

  const ren = React.useCallback(() => {
    console.log("rendering...")
  }, [])

  return <>
    <button onClick={() => setCount(count + 1)}>Chnage</button>&nbsp;&nbsp;&nbsp;
    Count: {count}
    <Memonised  ren={ren}  />
  </>
}

const Memonised = React.memo(function NestedApp({ren}){
  ren();
  return <p>Nested Component</p>
})

ReactDOM.render(<App />, document.getElementById('root'))
