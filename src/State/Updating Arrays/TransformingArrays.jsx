import React, { useState } from 'react'

let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 100 },
    { id: 1, type: 'square', x: 150, y: 100 },
    { id: 2, type: 'circle', x: 250, y: 100 },
]
const ShapeEditor = () => {
    const [shapes, setShapes] = useState(initialShapes)
    function handleDown() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === "square") {
                return shape
            } else {
                return {
                    ...shape,
                    y: shape.y + 50,
                }
            }
        })
        setShapes(nextShapes)
    }

    function handleUp() {
        const nextShapes = shapes.map(shape => {
            if (shape.type === "square") {
                return shape
            } else {
                return {
                    ...shape,
                    y: shape.y - 50,
                }
            }
        })
        setShapes(nextShapes)
    }
    return (
        <div>
            <button onClick={handleDown}>
                Move circles down
            </button>
            <button onClick={handleUp}>
                Move circles up
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        backgroundColor: shape.id % 2 === 0
                            ? "red"
                            : "blue",
                        position: "absolute",
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === "circle"
                                ? "50%"
                                : "",
                        width: 40,
                        height: 40
                    }}
                />
            ))}
        </div>
    )
}

export default ShapeEditor