import { useState } from 'react'
import './App.css'


function NoneedRedux() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Redux Counter</h1>
            <p>Count is {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment By 1
            </button>
            <button onClick={() => setCount(count + 5)}>
                Increment By 5
            </button>
            <button onClick={() => setCount(count - 5)}>
                decrement By 1
            </button>
            <button onClick={() => setCount(count - 5)}>
                decrement By 5
            </button>
        </div>
    )
}

export default NoneedRedux
