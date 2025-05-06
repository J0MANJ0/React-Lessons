import React, { useState } from 'react'

const ComponentPosition = () => {
    return (
        <div>
            <SamePos />
            <DiffPos />
        </div>
    )
}

function SamePos() {
    const [isFancy, setIsFancy] = useState(false)
    return (
        <div>
            {isFancy ? (
                <Counter isFancy={true} />
            ) : (
                <Counter isFancy={false} />
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => setIsFancy(e.target.checked)}
                />
                Use fancy styling
            </label>
        </div>
    )
}

function DiffPos() {
    const [isFancy, setIsFancy] = useState(false)

    return (
        <div>
            {isFancy ? (
                <div>
                    <Counter isFancy={true} />
                </div>
            ) : (
                <section>
                    <Counter isFancy={false} />
                </section>
            )}
            <label>
                <input
                    type="checkbox"
                    checked={isFancy}
                    onChange={e => setIsFancy(e.target.checked)}
                />
                Use fancy styling
            </label>
        </div>
    )
}

function Counter({ isFancy }) {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);

    return (
        <div
            style={{ width: "150px", height: "200px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", border: !isFancy ? "3px solid #000" : "3px solid yellow", borderRadius: "10px", backgroundColor: hover && "#ccc", boxShadow: hover && "0 4px 2px rgba(0,0,0,0.35)" }}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h2 style={{ color: isFancy && "yellowgreen" }}>{score}</h2>
            <button
                onClick={() => setScore(score + 1)}
                style={{ padding: "10px 15px", borderRadius: "10px", color: "white", backgroundColor: "#000" }}
            >
                Add one
            </button>
        </div>
    );
}


export default ComponentPosition