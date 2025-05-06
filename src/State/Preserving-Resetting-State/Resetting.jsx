import React, { useState } from 'react'

const Scoreboard = () => {
    const [isPlayerA, setIsPlayerA] = useState(true)
    return (
        <div>
            {isPlayerA ? (
                <Counter person="Taylor" />
            ) : (
                <Counter person="Sarah" />
            )}
            <button onClick={() => setIsPlayerA(!isPlayerA)}>
                Next Player
            </button>
        </div>
    )
}

function Counter({ person }) {
    const [score, setScore] = useState(0)
    const [hover, setHover] = useState(false)

    return (
        <div
            style={{ width: "110px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: "2px solid #000", borderRadius: "10px", backgroundColor: hover && "#ccc", boxShadow: hover && "0 4px 2px rgba(0,0,0,0.35)" }}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h2>{person}'s score: {score}</h2>
            <button
                onClick={() => setScore(score + 1)}
                style={{ padding: "10px 15px", borderRadius: "10px", color: "white", backgroundColor: "#000" }}
            >Add One</button>
        </div>
    )
}

export default Scoreboard