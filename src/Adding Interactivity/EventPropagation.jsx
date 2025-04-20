import React, { useState } from 'react'

const EventPropagation = () => {
    return (
        <div
            // onMouseEnter={() => alert("You hovered on me!!")}
            style={{ margin: "20px", display: "flex", justifyContent: "space-around", alignItems: "center", backgroundColor: "#ccc", padding: "20px" }}
            onClick={() => alert("You clicked the toolbar!")}
        // onClickCapture={() => alert("You clicked the toolbar!")}
        >


            <button onClick={(e) => {
                e.stopPropagation()
                alert("Playing...")
            }}>Play Movie</button>
            <button onClick={(e) => {
                e.stopPropagation()
                alert("Uploading...")
            }}>Upload</button>

            <form onSubmit={e => {
                e.preventDefault()
                alert("Submitting...")
            }}>
                <input type="text" />
                <button onClick={e => {
                    e.stopPropagation()
                }}>Submit</button>
            </form>
        </div>
    )
}

function randomColor() {
    let r = 150 + Math.round(100 * Math.random())
    let g = 150 + Math.round(100 * Math.random())
    let b = 150 + Math.round(100 * Math.random())
    let a = 1 + Math.round(Math.random())
    return `rgba(${r}, ${g}, ${b}, ${a})`
}

function handleColorChange() {
    let divStyle = document.getElementById("color").style
    divStyle.backgroundColor = randomColor()
}

export const ChangeColor = () => {

    const [clicks, setClicks] = useState(0)

    return (
        <div onClick={() => {
            setClicks(p => p += 1)
        }} id='color'>
            <button onClick={e => {
                e.stopPropagation()
                handleColorChange()
            }}>
                Change color
            </button>
            <h2>Clicks on the page: {clicks}</h2>
        </div>
    )
}

export default EventPropagation