import React, { useState } from 'react'

const AppCounter = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly", margin: "20px auto" }}>
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}

export function Counter() {
    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(false)

    return (
        <div
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            style={{ width: "150px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "2px solid #000", borderRadius: "10px", backgroundColor: hover && "#ccc", boxShadow: hover && "0 4px 2px rgba(0,0,0,0.35)" }}
        >
            <h2>{score}</h2>
            <button
                onClick={() => setScore(p => p + 1)}
                style={{ padding: "10px 15px", borderRadius: "10px", color: "white", backgroundColor: "#000" }}
            >
                Add One
            </button>
        </div>
    )
}

export default AppCounter