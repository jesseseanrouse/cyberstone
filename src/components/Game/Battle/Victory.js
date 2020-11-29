// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Victory(props) {
	return (
		<div className='gameDisplay'>
			{props.message}
			<div className='gameList'>
				<Link to='/game/scrapyard/'>Continue</Link>
			</div>
		</div>
	);
}

export default Victory;
