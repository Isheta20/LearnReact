import { useState } from "react"
import './App.css'
function App() {
  const username = "Isheta"

  // let counter = 15 //This will update but will not propogate in the UI i.e. updated in the UI
  const [counter, setCounter] = useState(15)

  const addValue = () =>{
    setCounter(counter + 1)
    // console.log("clicked", counter);
  }
  
  const removeValue = () =>{
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>Learing React {username}</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
