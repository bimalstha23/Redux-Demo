import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import  {decrement, increment} from './ReduxToolkit/slice'


function App() {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <p>Count is {count.counter}</p>
      <button onClick={() => dispatch(increment(1))}>
        Increment By 1
      </button>
      <button onClick={() => dispatch(increment(5))}>
        Increment By 5
      </button>
      <button onClick={() => dispatch(decrement(1))}>
        decrement By 1
      </button>
      <button onClick={() => dispatch(decrement(5))}>
        decrement By 5
      </button>
    </div>
  )
}

export default App
