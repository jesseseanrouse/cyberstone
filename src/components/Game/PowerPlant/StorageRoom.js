// import react
import React from 'react';
import { Link } from 'react-router-dom';

function StorageRoom() {
	return (
		<>
			<p>Travel</p>
			<Link to='/game/powerplant/hallway'>Hallway</Link>
			<Link to='/game/powerplant/airvent'>Climb into Air Vent</Link>
		</>
	);
}

export default StorageRoom;
