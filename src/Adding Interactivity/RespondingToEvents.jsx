import React from 'react'

const RespondingToEvents = () => {
    return (
        <Toolbar
            onPlayMovie={() => alert("Playing...")}
            onUploadImage={() => alert("Uploading...")}
        />
    )
}

function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUploadImage}>
                Upload IMage
            </Button>
        </div>
    )
}

function Button({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export default RespondingToEvents