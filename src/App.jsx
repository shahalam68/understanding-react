import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'
import Books from './components/Books/Books'

function App() {
  const [steps, setSteps] = useState(0)
  const books = [{name:'Small Giants', author: 'bo'},
  {name:'Small Giants', author: 'bo'},
  {name:'Build To sell', author: 'john'},
  {name:'Grind it', author: 'Ray'},
  {name:'Shoe Dog', author: 'bo'},
]
  const handleIncriseSteps =() =>{
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }
  useEffect(()=>{
    console.log(steps);
  },[steps])
  return (
    <div className="App">
      <h3>My Steps: {steps}</h3>
      <button onClick={handleIncriseSteps}>Walk</button>
      <Device name="phone" steps={steps} price="13535"></Device>
      <Books books ={books}></Books>
    </div>
  )
}

export default App
