// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Defeat(props) {
	return (
		<div className='gameDisplay'>
			{props.message}
			<div className='gameList'>
				<Link to='/game/scrapyard/recover'>Continue</Link>
			</div>
		</div>
	);
}

export default Defeat;
