// import react
import React from 'react';
import { Link } from 'react-router-dom';

function WakeUp() {
	return (
		<div className='gameDisplay'>
			<p>
				You wake up in the scrapyard, not sure how you got here but you're alive
				and thats what counts.
			</p>
			<p>Action</p>
			<div className='gameList'>
				<Link to='/game/scrapyard'>Continue</Link>
			</div>
		</div>
	);
}

export default WakeUp;
