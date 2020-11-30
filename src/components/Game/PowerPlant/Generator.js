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
    function handleRecharge() {
			if (props.stat.ep >= props.stat.epMax) {
				props.setMessage('You are already at full energy');
			} else {
				let stat = props.stat;
				props.setStat({ ...stat, ep: props.stat.epMax });
				props.setMessage('You recharge yourself using the generator.');
			}
		}
	return (
		<div className='gameDisplay'>
			<p>You are in the generator room</p>
			{props.message}
			<p>Actions</p>
			<div className='gameList'>
				<div onClick={handleRecharge}>Recharge</div>
			</div>
			<p>Travel</p>
			<div className='gameList'>
				<Link to='/game/powerplant/hallway'>Hallway</Link>
				<Link to='/game/powerplant/airvent'>Climb into Air Vent</Link>
			</div>
		</div>
	);
}

export default Generator;
