import React, { useState } from 'react'

const MovingDot = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
        isShown: false
    })
    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY,
                    isShown: true
                })
            }}
            onPointerLeave={e => {
                setPosition(p => {
                    return { ...p, isShown: false }
                })
            }}
            style={{
                position: "relative",
                width: "100vw",
                height: "100vh",
                cursor: "pointer"
            }}
        >
            {position.isShown && <div
                style={{
                    position: "absolute",
                    backgroundColor: "yellow",
                    borderRadius: "50%",
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 15,
                    height: 15,
                }} />}
        </div>
    )
}

export default MovingDot