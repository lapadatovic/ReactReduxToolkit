import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount, decrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch();
  const [incrementValue, setIncrementValue] = useState(0)

  const addValue = Number(incrementValue) || 0;

  const handleReset = () => {
    setIncrementValue(0);
    dispatch(reset());
  }
  return (
    <div>
      <div>
        <p>{count}</p>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(handleReset())}>reset</button>
      </div>
      <input 
          type="text"
          value={addValue}
          onChange={(e)=> dispatch(setIncrementValue(e.target.value))}
        />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment By Value</button>
        <button onClick={() => dispatch(decrementByAmount(addValue))}>Decrement By Value</button>
      </div>
    </div>
  )
}
