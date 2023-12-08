import React from 'react'
import { useReducer } from 'react'
import reducer from './reducer';

const initialValue=0;

const Reducer1 = () => {

    const [count,dispatch]=useReducer(reducer,initialValue)



  return (
    <>
    <hr />
     <div className="card">
        <h2>useReducer Hook </h2>
        <button className='btn' onClick={() => dispatch({type:"Inc"})}>
          Increase
        </button>
        <h1>{count}</h1>
        <button className='btn' onClick={() => dispatch({type:"Dec"})}>
          Decrease
        </button>
      </div>
    </>
  )
}

export default Reducer1