import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom'

//React.memo is used to memonised the whole component, and only
//change when the porps passed to it gets chnaged.

//useMemo is used to memonised a perticular value, so that it is 
//not re calculated from the funtion.

function App() {
  const [count, setCount] = useState(0);
  const [next, setNext] = useState(0);

  const time = React.useMemo(() => new Date().getTime(), [next]);

  console.log(time);

  return <>
    <button onClick={() => setCount(count + 1)}>Chnage</button>&nbsp;&nbsp;&nbsp;
    <button onClick={() => setNext(next + 1)}>Next</button>&nbsp;&nbsp;&nbsp;
    Next: {next}
    <MemonisedComponent count={count} />
  </>
}

const MemonisedComponent = React.memo(function NestedApp({count}){
  console.log("rendered")
  return <p>count is : {count}</p>
})

ReactDOM.render(<App />, document.getElementById('root'))
