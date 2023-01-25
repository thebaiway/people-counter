import './App.css';
import background from './Images/istockphoto-1255056515-612x612.jpg'

function App() {

// let countEl = document.getElementByClassName("count-el")
// let saveEl = document.getElementByClassName("save-el")

// let count = 0

// function increment () {
//     count += 1
//     countEl.textContent = count
// }

// function save () {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
//     console.log(count)
//     count = 0
//     countEl.textContent = 0
// }

// function reset () {
//   count = 0
//   countEl.textContent = 0
//   saveEl.textContent = "Previous entries: "
// }

  return (

    <div className="container" style = {{backgroundImage: `url(${background})`}}>
        <h1>People Entered:</h1>
        <h2 className="count-el">0</h2>
        <button className="increment-btn" onclick="increment()">INCREMENT</button>
        <button className="save-btn" onclick="save()">SAVE</button>
        <p className ="save-el">Previous Entries: </p>
        <button className ="reset-btn" onclick="reset()">RESET ENTRIES</button>
    </div>
  );
}

export default App;
