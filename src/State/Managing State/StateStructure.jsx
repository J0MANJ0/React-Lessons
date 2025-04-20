import React, { useState } from 'react'

const FormB = () => {
    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    // const [fullName, setFullName] = useState("")

    // alternative

    const fullName = fName + " " + lName

    function handleFirstName(e) {
        setFName(e.target.value)
        // setFullName(e.target.value + " " + lName)
    }

    function handleLastName(e) {
        setLName(e.target.value)
        // setFullName(fName + "  " + e.target.value)
    }
    return (
        <div>
            <h2>Let's check you in</h2>
            <label>
                First Name:
                <input type="text"
                    value={fName}
                    onChange={handleFirstName}
                />
            </label>
            <label>
                Last Name:
                <input type="text"
                    value={lName}
                    onChange={handleLastName}
                />
            </label>
            <p>
                Your ticket will be issued to: <b>{fullName}</b>
            </p>
        </div>
    )
}

export default FormB