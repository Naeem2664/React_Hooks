import React, { useState } from 'react'

const Memo = () => {
    const [count,setCount]=useState(0);
    const [item,setItem]=useState(4)

    const multiCount=()=>{
        return count*3;
    }
  return (
    <>
    <div className='memo'> 
    <h1>useMemo Hook</h1>
    <h2>The value of count {count}</h2>
    <h2>The value of item {item}</h2>
    <h2>{multiCount()}</h2>
    <button className='btn' onClick={()=>setCount(count+2)} >Update Count</button>
    <button className='btn' onClick={()=>setItem(item*2)} >Update Item</button>
    </div>
    </>
  )
}

export default Memo