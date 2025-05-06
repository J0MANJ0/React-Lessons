import React, { useState } from 'react'
import { Counter } from './P-Reset'

const RenderB = () => {
    const [showB, setShowB] = useState(true)
    return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
            <Counter />
            {showB && <Counter />}
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={e => setShowB(e.target.checked)}
                />
                Render the second component
            </label>
        </div>
    )
}

export default RenderB