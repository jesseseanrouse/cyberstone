// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Scrapyard(props) {
	return (
		<>
			<p>Scrapyard</p>
			<p>
				You stand in an open area near the front gate. You can see the Power
				Plant, Smelter, Compactor, and Factory from here.
			</p>
			<p>Actions</p>
			<Link to='/game/scrapyard/explore'>Explore</Link>
		</>
	);
}

export default Scrapyard;
