import { useState } from 'react'
import './App.css'


function ReduxwithoutRedux() {
    const [count, setCount] = useState(0)

    const increment = (payload) => {
        return {
            type: 'increment',
            payload
        }
    }
    const decrement = (payload) => {
        return {
            type: 'decrement',
            payload
        }
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return state + action.payload

            case 'decrement':
                return state - action.payload
            default:
                return state
        }
    }
    
    const dispatch = (action) => {
        setCount(reducer(count, action))
    }


    return (
        <div className="App">
            <h1>Redux Counter</h1>
            <p>Count is {count}</p>
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

export default ReduxwithoutRedux
