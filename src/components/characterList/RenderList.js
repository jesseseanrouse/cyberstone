import React from 'react'

const RenderList = (props) => {
    return (
        <>
            <div className='charName'>{props.name}</div>
            <button value={props.name} onClick={props.handleLoad} >Load</button>
        </>
    )
}

export default RenderList