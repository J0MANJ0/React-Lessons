import React, { useState } from 'react'

let id = 0

const Arrays = () => {
    const [name, setName] = useState('')
    const [artists, setArtists] = useState([])
    return (
        <div>
            <h2>Inspiring sculptors:</h2>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => {
                setArtists([
                    ...artists,
                    { id: id, name: name }
                ])
            }}>
                Add
            </button>
            <ul>
                {artists.map(artist => <li key={artist.id}>{artist.name}</li>)}
            </ul>
        </div>
    )
}

export default Arrays