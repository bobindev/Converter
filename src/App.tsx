import { SetStateAction, useState } from 'react'

import './App.css'
import CentimetreToInch from './Centemetre'
import KmToMiles from './KmToMiles'
import SqToPyeong from './SqToPyeong'

function App() {
  const [index, setIndex] = useState('xx')
  const onSelect = (event: { target: { value: SetStateAction<string> } }) => {
    setIndex(event.target.value)
  }
  return (
    <div className="unit">
      <h1 className="title">Super Converter</h1>
      <select value={index} onChange={onSelect} id="units">
        <option value="xx">Select your unit</option>
        <option value="0">Centimetre & Inch</option>
        <option value="1">Km & Miles</option>
        <option value="2">Sq & Pyeong</option>
      </select>
      <hr />
      {index === 'xx' ? 'Please select your units' : null}
      {index === '0' ? <CentimetreToInch /> : null}
      {index === '1' ? <KmToMiles /> : null}
      {index === '2' ? <SqToPyeong /> : null}
    </div>
  )
}


export default App
