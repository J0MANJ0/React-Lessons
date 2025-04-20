import React, { useState } from 'react'
import { sculptureList } from './data'

const StateInteractivity = () => {
    const [i, setI] = useState(0)
    const [showMore, setShowMore] = useState(false)
    const hasNext = i < sculptureList.length - 1
    const hasBack = i > 0

    const handleNext = () => {
        hasNext
            ? setI(p => p += 1)
            : setI(0)
    }

    const handleBack = () => {
        hasBack ? setI(p => p -= 1) : setI(0)
    }

    const hanleShowMore = () => {
        setShowMore(p => !p)
    }

    let sculpture = sculptureList[i]
    return (
        <div>
            <div>
                <button onClick={handleNext}>Next</button>
                <button onClick={handleBack}>Back</button>
            </div>
            <h2>
                <i>{sculpture.name}</i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({i + 1} of {sculptureList.length})
            </h3>
            <button onClick={hanleShowMore}>
                {showMore ? "Hide" : "Show"}
            </button>
            <article>
                {showMore && <p>{sculpture.description}</p>}
            </article>
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </div>
    )
}

export default StateInteractivity