import React, { useState } from 'react'

// Any screen update in a React app happens in three steps:
// Trigger
// Render
// Commit


const UseState = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    const incrementStyles = {
        backgroundColor: "#ffbe0b",
        padding: "15px",
        fontSize: "1.2rem",
        border: "none",
        borderRadius: "10px",
        opacity: count > 10 ? 0.2 : 1
    }

    const decrementStyles = {
        backgroundColor: "red",
        padding: "15px",
        fontSize: "1.2rem",
        border: "none",
        borderRadius: "10px",
        marginLeft: "10px",
        opacity: count === 0 ? 0.2 : 1
    }
    return (
        <div>
            <h2>Count is : {count}</h2>
            <p>Limited to 10 counts</p>
            <button
                onClick={() => setCount(p => p += 1)}
                disabled={count === 10}
                style={incrementStyles}
            >
                +
            </button>

            <button
                onClick={() => setCount(p => p -= 1)}
                disabled={count === 0}
                style={decrementStyles}
            >
                -
            </button>

            <h3>Name : {name}</h3>
            <label>
                EnterName
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </label>
        </div>
    )
}

export default UseState