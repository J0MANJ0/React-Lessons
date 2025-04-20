import React, { useState } from 'react'

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
]

let id = 3
const RemovingFromArray = () => {
    const [artists, setArtists] = useState(initialArtists)
    const [name, setName] = useState("")
    return (
        <div>
            <h1>Inspiring sculptors:</h1>
            <h2>No. of Sculptors: {artists.length}</h2>
            <div>
                <input type="text" value={name} onChange={e =>
                    setName(e.target.value)
                } />
                <button onClick={() => {
                    if (name) {
                        setArtists([
                            ...artists,
                            { id: id++, name: name }
                        ])
                    }
                    setName("")
                }}>
                    Add
                </button>
            </div>
            <ul>
                {artists.map(artist => (
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: 300,
                        padding: 10
                    }}>
                        <li key={artist.id}>{artist.name}
                        </li>
                        <button onClick={() => {
                            setArtists(artists.filter(a =>
                                a.id !== artist.id
                            ))
                        }}>X</button>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default RemovingFromArray