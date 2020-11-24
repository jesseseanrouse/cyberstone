import React from 'react'

const RenderList = (props) => {
    return (
        <>
            <p>{props.name}</p>
            <button value={props.name} onClick={props.handleLoad} >Load</button>
        </>
    )
}

export default RenderList