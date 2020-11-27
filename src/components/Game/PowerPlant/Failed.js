// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Failed(props) {
	return (
		<>
			{props.message}
			<Link to='/game/scrapyard/recover'>Continue</Link>
		</>
	);
}

export default Failed;
