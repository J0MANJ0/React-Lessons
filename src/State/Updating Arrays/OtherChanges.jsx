import React, { useState } from 'react'

const initialList = [
    { id: 0, title: 'Big Bellies' },
    { id: 1, title: 'Lunar Landscape' },
    { id: 2, title: 'Terracotta Army' },
    { id: 3, title: 'Band Army' },
];

const ListB = () => {
    const [list, setList] = useState(initialList)

    function reverseList() {
        const nextList = [...list]
        nextList.reverse()
        setList(nextList)
    }
    return (
        <div>
            <button onClick={reverseList}>Reverse</button>
            <ul>
                {list.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListB