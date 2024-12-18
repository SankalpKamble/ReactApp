import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div className="card">
        <h1>Counter App</h1>
        <h2>Count: {count}</h2>
        <div className="button-group">
          <button onClick={increment}>
            Increment
          </button>
          <button onClick={decrement}>
            Decrement
          </button>
          <button onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  )
}

export default App
