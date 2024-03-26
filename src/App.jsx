
import './App.css'
import Counter from './components/Counter'
import { useContext } from 'react'
import { CounterContext } from './contexts/CounterContext'

function App() {
 
  const counterContext=useContext(CounterContext)
  return (
    <>
       <div>
        <h1>The Count is:{counterContext.count}</h1>
          <Counter/>
          <Counter/>
          <Counter/>
       </div>
        
    </>
  )
}

export default App
