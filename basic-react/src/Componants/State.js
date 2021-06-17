import React, {useState} from 'react'

const State = () => {
    const [count, setCount] = useState(0)
    const adding = () => {
        // console.log(1)
        setCount(count+2)
    }
    const reset =() => {
        setCount(0)
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={adding}>click</button> 
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default State
