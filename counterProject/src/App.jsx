import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setcounter] = useState(0)
  // let counter=15;
  
  let addValue = () => {
    console.log("Value added", counter);
    setcounter(counter+1)
  }
  let SubtractValue =()=> {
    console.log("Subtracted value ", counter)
    setcounter(counter-1)
  }
  let resetvalue = () => {
    console.log("reset value ", counter)
    setcounter(0)
  }

  return (
    <>
      <h1>Chai our React <br/> counter Project</h1>
      <h3>Counter Project: {counter}</h3>
      <button onClick={addValue}>Add value</button>
      <button onClick={SubtractValue}>Subtract value</button>
      <button onClick={resetvalue}>reset value</button>
    </>
  )
}

export default App
