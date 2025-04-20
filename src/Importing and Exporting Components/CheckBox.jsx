import React, { useState } from 'react'

const CheckBox = ({ name }) => {
    const [isChecked, setIsChecked] = useState(false)
    return (
        <ul>
            {/* {isChecked ? <li>
                {`${name} ✅`}
                <input
                    type="checkbox" onChange={e => setIsChecked(prev => !prev)} style={{ accentColor: isChecked ? "black" : "red" }} />
            </li> : <li>
                {`${name}`}
                <input type="checkbox" onChange={e => setIsChecked(prev => !prev)} />
            </li>} */}
            <li>
                {name} {!isChecked && "✅"}
                <input type="checkbox" onChange={e => setIsChecked(prev => !prev)} style={{ cursor: "pointer" }} />
            </li>
        </ul>
    )

}

export default CheckBox