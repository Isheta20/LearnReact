import { useState } from "react"
import './App.css'
// import Card from "../components/Card"

function App() {
  const username = "Isheta"

  // let counter = 15 //This will update but will not propogate in the UI i.e. updated in the UI
  const [counter, setCounter] = useState(15)

  const addValue = () =>{
    // If in counter, in add function you write the setter function of usestate multiple times example 4 times initial value is 15. Then what will be the value after of counter after a click?
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    //Solution if such a case arises
    setCounter((prevCounter)=>{ //takes a callback prevcounter - current value
      prevCounter+1;
    })
    setCounter((prevCounter)=>{
      prevCounter+1;
    })
    setCounter((prevCounter)=>{
      prevCounter+1;
    })
    setCounter((prevCounter)=>{
      prevCounter+1;
    })
    //now no longer a batch as we wait for prev state etc

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

      {/* <Card/> */}
      
    </>
  )
}

export default App

