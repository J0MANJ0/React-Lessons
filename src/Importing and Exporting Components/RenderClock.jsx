import React, { useState, useEffect } from 'react'
import Clock from './Clock'

function useTime() {
    const [time, setTime] = useState(() => new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(id)
    }, [])
    return time
}
const RenderClock = () => {
    const time = useTime()
    const [color, setColor] = useState("black")
    const [bg, setBg] = useState("white")
    return (
        <div>
            <p>
                Pick a color:{" "}
                <select value={color} onChange={e => setColor(e.target.value)}>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="#fff">White</option>

                </select>
                <select value={bg} onChange={e => setBg(e.target.value)}>
                    <option value="#fff">White</option>
                    <option value="#000">Black</option>
                    <option value="#ccc">CCC</option>
                </select>
            </p>
            <Clock time={time.toLocaleString()} color={color} bg={bg} />
        </div>
    )
}

export default RenderClock