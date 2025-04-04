import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [data, setData] = useState({});
  const [change, setChange] = useState(2);

  const handleChange = () => {
    setChange(Math.floor(Math.random() * 10))
  }

  useEffect(() => {
    const fetchData = () => {
      fetch('https://dummyjson.com/products/' + change)
        .then((_data) => _data.json())
        .then((_data) => setData(_data))
    }
    fetchData()
  }, [change])

  return <div><button onClick={handleChange}>Change</button><br /><p>{data?.description}</p></div>
}

ReactDOM.render(<App />, document.getElementById('root'))
