import { useState } from "react"

function SqToPyeong() {
  const [amount, setAmount] = useState(0)
  const [inverted, setInverted] = useState(false)
  const onChange = (event: any) => {
    setAmount(event.target.value)
    console.log(amount)
  }

  const onInvert = () => {
    setInverted((current) => !current)
    reset()
  }

  const reset = () => setAmount(0)

  return (
    <div className="unit">
      <div className="converter-row">
        <label className="main-label" htmlFor="Centimetre">
          Square meter(㎡)
        </label>
        <input
          value={inverted ? Math.round(amount / 0.3025) : amount}
          id="sq"
          placeholder="Square meter"
          type="number"
          disabled={inverted}
          onChange={onChange}
          className="converter-input"
        />
      </div>

      <div className="converter-row">
        <label className="main-label" htmlFor="Inch">
          Pyeong(평)
        </label>
        <input
          value={inverted ? amount : Math.round(amount * 0.3025)}
          id="pyeong"
          placeholder="Pyeong"
          type="number"
          onChange={onChange}
          disabled={!inverted}
          className="converter-input"
        />
      </div>
      <div className="buttons">
        <button onClick={reset}>Reset</button>
        <button onClick={onInvert}>
          {inverted ? 'Turn back' : 'Invert'}
        </button>
      </div>
    </div>
  )
}

export default SqToPyeong