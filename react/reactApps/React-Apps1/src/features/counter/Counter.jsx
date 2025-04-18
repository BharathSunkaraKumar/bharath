import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dec, inc } from './counterSlice'

function Counter() {
    let {count} =  useSelector(state => state.c)
    let dispatch = useDispatch()
    // console.log(count)
  return (
    <div className='box'>
        <h1>Counter: {count}</h1>
        <button onClick={()=>{dispatch(inc())}}>inc</button>
        <button onClick={()=>{dispatch(dec())}}>dec</button>
    </div>
  )
}

export default Counter