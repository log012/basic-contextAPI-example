import React,{useContext} from 'react'
import { CounterContext } from '../contexts/CounterContext'

const Counter = () => {
    const  counterContext = useContext(CounterContext)
    console.log(counterContext);
    const Inc=()=>{
        counterContext.setCount(counterContext.count+1);
    }
    const Dec=()=>{
        counterContext.setCount(counterContext.count-1);
    }
  return (
    <div>

    <button onClick={Inc}>Increment</button>
    <button onClick={Dec}>Decrement</button>
    </div>
  )
}

export default Counter