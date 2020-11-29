import React from 'react'

const RenderList = (props) => {
    return (
			<>
				<div className='charName'>{props.name}</div>
				<button value={props.name} onClick={props.handleLoad}>
					Load
				</button>
				<button value={props.name} onClick={props.handleDelete}>
					Delete
				</button>
			</>
		);
}

export default RenderList