import React from 'react'

const Background = ({ position }) => {
    return (
        <div
            style={{
                position: "absolute",
                transform: `translate(${position.x}px, ${position.y}px)`,
                width: 300,
                height: 300,
                backgroundColor: "rgba(200, 100, 50, 0.5)"
            }}
        />
    )
}

export default Background