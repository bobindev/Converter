import { useState } from "react"

function CentimetreToInch() {
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
          Centimetre
        </label>
        <input
          value={inverted ? Math.ceil(amount * 2.54) : amount}
          id="centimetre"
          placeholder="Centimetre"
          type="number"
          disabled={inverted}
          onChange={onChange}
          className="converter-input"
        />
      </div>

      <div className="converter-row">
        <label className="main-label" htmlFor="Inch">
          Inch
        </label>
        <input
          value={inverted ? amount : Math.ceil(amount / 2.54)}
          id="inch"
          placeholder="Inch"
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

export default CentimetreToInch
