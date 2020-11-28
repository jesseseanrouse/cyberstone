// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Generator(props) {
	React.useEffect(() => {
		props.setMessage('');
	}, []);
	return (
		<>
			<p>You are in the generator room</p>
			{props.message}
			<p>Travel</p>
			<Link to='/game/powerplant/hallway'>Hallway</Link>
			<Link to='/game/powerplant/airvent'>Climb into Air Vent</Link>
		</>
	);
}

export default Generator;
