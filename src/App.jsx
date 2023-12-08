import { useState,useEffect,useRef} from 'react'
import './App.css'
import Paraent from './components/Paraent'
import Reducer1 from './components/Reducer1'
import UseRef from './components/Useref/UseRef'
import Memo from './components/Usememo/Memo'
function App() {
  const [count, setCount] = useState(0)
  const [screenWidth, setsSreenWidth] = useState(window.screen.width)
  const [screenHeight, setsSreenHeight] = useState(window.screen.height)
  const inputField = useRef()

  const changeColor=()=>{
    inputField.current.style.backgroundColor = 'black';
    inputField.current.style.padding = '3rem';
    inputField.current.style.color = 'white';
  }
  const changeColor1=()=>{
    inputField.current.focus();
    inputField.current.style.backgroundColor='#fff';
    inputField.current.style.padding = '3rem';
    inputField.current.style.color = 'black';
  }


  const currentScreenWidth=()=>{
    setsSreenWidth(()=> window.innerWidth)
  } 

  const currentScreenHeight=()=>{
    setsSreenHeight(()=> window.innerHeight)
  } 
  useEffect(() => {
    document.title=count

    window.addEventListener("resize",currentScreenWidth)
    window.addEventListener("resize",currentScreenHeight)
    return()=>{
    window.removeEventListener("resize",currentScreenWidth)
    window.removeEventListener("resize",currentScreenHeight)
    }

    
  });
  return (
    <> 
      <div className="card" ref={inputField}>
        <Memo/>
        <hr />
        <button className='btn' onClick={changeColor}>Change Color</button>
        <button className='btn' onClick={changeColor1}>Change Color</button>
    <Paraent/>
        <h2>The current width is {screenWidth}px </h2>
        <h2>The current height is {screenHeight}px </h2>
        <hr />
        <h2>useState Hook </h2>
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          Increase
        </button>
        <h1>{count}</h1>
        <button className='btn' onClick={() => setCount((count) =>{
          let newNum=0
          count >=1 ? (newNum=count-1): (newNum==0)
          return newNum;
          
        } )}>
          Decrease
        </button>
      <Reducer1/>
      <UseRef/>
      </div>
    </>
  )
}

export default App
