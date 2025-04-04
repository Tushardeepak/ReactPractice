import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {LodashDeepClone} from './lodash/deepClone'
import {LodashEquals} from './lodash/deepEquals'
import {LodashGetAndSet} from './lodash/getAndSet'
import {DebounceComp} from './Minis/debounce'
import {JSONStringify} from './Minis/JSONStringify'
import {JSONValidator} from './Minis/JSONValidator'
import {NCallbcakSeries} from './Minis/NCallbackSeries'

function App() {
  return (
    <div>
      <h2>React practice</h2>
      {/* <JSONValidator /> */}
      {/* <JSONStringify /> */}
      {/* <LodashGetAndSet /> */}
      {/* <LodashDeepClone /> */}
      {/* <DebounceComp /> */}
      {/* <LodashEquals /> */}
      <NCallbcakSeries />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
