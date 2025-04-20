import React, { useState } from 'react'
import { useImmer } from "use-immer"
import Background from './Background'
import Box from './Box'

const initialPosition = {
    x: 0,
    y: 0
}

const Canvas = () => {
    // const [shape, setShape] = useState({
    //     color: "orange",
    //     position: initialPosition
    // })

    const [shape, updateShape] = useImmer({
        color: "orange",
        position: initialPosition
    })

    function handleMove(dx, dy) {
        // setShape({
        //     ...shape,
        //     position: {
        //         x: shape.position.x + dx,
        //         y: shape.position.x + dy,
        //     }
        // })

        updateShape(draft => {
            draft.position.x += dx;
            draft.position.y += dy;
        })
    }

    function handleColorChange(e) {
        // setShape({
        //     ...shape,
        //     color: e.target.value
        // })

        updateShape(draft => {
            draft.color = e.target.value
        })
    }
    return (
        <div>
            <select value={shape.color} onChange={handleColorChange}>
                <option value="orange">Orange</option>
                <option value="black">Black</option>
                <option value="yellow">Yellow</option>
                <option value="aliceblue">Alice-blue</option>
            </select>
            <Background
                position={initialPosition}
            />
            <Box
                color={shape.color}
                position={shape.position}
                onMove={handleMove}
            >
                Drag Me
            </Box>
        </div>
    )
}

export default Canvas