import './App.css';
import background from './Images/istockphoto-1255056515-612x612.jpg'
import React, {useState} from 'react'

function App() {

  const [count, setCount] = useState(0)

  function add () {
    setCount(prevCount => prevCount + 1)
  }

  const [save, setSave] = useState("")

  function saveEntry () {
    setSave(prevSave => prevSave += count + " - ")
  }

  function resetEntry () {
    setCount(prevCount => prevCount = 0)
    setSave(prevSave => prevSave = " ")
  }

  return (

    <div className="container" style = {{backgroundImage: `url(${background})`}}>
        <h1>People Entered:</h1>
        <h2 className="count-el">{count}</h2>
        <button className="increment-btn" onClick = {add}>INCREMENT</button>
        <button className="save-btn" onClick = {saveEntry}>SAVE</button>
        <p className ="save-el">Previous Entries: {save} </p>
        <button className ="reset-btn" onClick = {resetEntry}>RESET ENTRIES</button>
    </div>
  )
}

export default App;
