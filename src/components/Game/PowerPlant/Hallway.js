// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Hallway() {
	return (
		<>
			<p>Travel</p>
			<Link to='/game/powerplant/lobby'>Return to Lobby</Link>
		</>
	);
}

export default Hallway;
