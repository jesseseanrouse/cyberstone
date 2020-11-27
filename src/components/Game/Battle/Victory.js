// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Victory(props) {
	return (
		<>
			{props.message}
			<Link to='/game/scrapyard/'>Continue</Link>
		</>
	);
}

export default Victory;
