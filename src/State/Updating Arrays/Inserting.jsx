import React, { useState } from 'react'

let nextId = 3;

const initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
]

const List = () => {
    const [name, setName] = useState("")
    const [artists, setArtists] = useState(initialArtists)

    function handleClick() {
        const insertAt = 1

        if (name) {
            const nextArtists = [
                ...artists.slice(0, insertAt),
                { id: nextId++, name: name },
                ...artists.slice(insertAt)
            ]
            setArtists(nextArtists)

        }
        setName("")
    }
    return (
        <div>
            <h2>Inspiring sculptors:</h2>
            <input type="text"
                onChange={e => setName(e.target.value)} value={name} />
            <button onClick={handleClick}>Insert</button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default List