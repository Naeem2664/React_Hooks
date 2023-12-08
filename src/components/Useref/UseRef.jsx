import React from 'react'
import { useRef,useState,useEffect } from 'react'

const UseRef = () => {

    //const [count,setCount]=useState(0)
    const count=useRef(0);
    console.log(count)

    const ref = useRef();
    // Styling the element
    const handleClick = () => {
        ref.current.style.backgroundColor = 'black';
        ref.current.style.padding = '3rem';
        ref.current.style.color = 'white';
        ref.current.style.width = '150px';
        ref.current.style.height = '150px';
        ref.current.style.margin = '50px';
        ref.current.style.borderRadius = '10px';
    };

    useEffect(()=>{
        count.current=count.current+1
    })
  return (
    <>
    <h1>{count.current} times the page is rendered</h1>
    <button className='btn' onClick={handleClick} >Change Style</button>
    <div ref={ref}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, maxime!</p></div>
    </>
  )
}

export default UseRef