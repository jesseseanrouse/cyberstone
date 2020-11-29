// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Generator(props) {
	React.useEffect(() => {
		props.setMessage('');
		document.body.style.backgroundColor = 'transparent';
		// image is owned by ArtStation
		document.body.style.backgroundImage =
			"url('https://i.imgur.com/Ncr1iQk.jpg')";
	}, []);
	return (
		<div className='gameDisplay'>
			<p>You are in the generator room</p>
			{props.message}
			<p>Travel</p>
			<div className='gameList'>
				<Link to='/game/powerplant/hallway'>Hallway</Link>
				<Link to='/game/powerplant/airvent'>Climb into Air Vent</Link>
			</div>
		</div>
	);
}

export default Generator;
