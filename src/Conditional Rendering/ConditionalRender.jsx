import React from 'react'

const Item = ({ name, isPacked }) => {
    const styles = {
        textDecoration: isPacked ? "line-through" : ""
    }
    // if (isPacked) {
    //     return <li>{name} ✅</li>
    // }
    // return <li>{name} ❌</li>
    return (
        <>
            <li style={styles}>{name} {isPacked ? "✅" : "❌"}</li>
        </>
    )
}

const ConditionalRender = () => {

    return (
        <div>
            <Item name="Space suit" isPacked={true} />
            <Item name="Space suit" isPacked={true} />
            <Item name="Jump suit" isPacked={true} />
            <Item name="Space suit" isPacked={true} />
            <Item name="Space suit" isPacked={false} />
        </div>
    )
}

export default ConditionalRender