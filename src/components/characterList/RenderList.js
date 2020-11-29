import React from 'react'

const RenderList = (props) => {
    return (
			<>
				<div className='charName'>{props.name}</div>
				<button
					className='charBut2'
					value={props.name}
					onClick={props.handleLoad}>
					Load
				</button>
				<button
					className='charBut2'
					value={props.name}
					onClick={props.handleDelete}>
					Delete
				</button>
			</>
		);
}

export default RenderList