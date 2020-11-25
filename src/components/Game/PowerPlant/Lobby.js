// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Lobby(props) {
	// Messages
	React.useEffect(() => {
		props.setMessage('');
	}, []);
	// Actions
	function handlePick() {
		if (props.stat.cun < 5) {
			props.setMessage('You are unable to pick the lock');
		} else {
            props.setMessage('You successfully open the lock');
            let powerPro = props.powerPro
			props.setPowerPro({...powerPro, door: true});
		}
	}
	function handleBash() {
		if (props.stat.str < 6) {
			props.setMessage('Your are not strong enough to bash down this door');
		} else {
			props.setMessage('You successfully bash down the door');
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, door: true });
		}
	}

	function openDoor() {
		if (props.powerPro.door === false) {
			return (
				<div>
					<div onClick={handleBash}>Bash through door</div>
					<div onClick={handlePick}>Pick Lock</div>
				</div>
			);
		} else {
			return (
				<>
					<Link to='/game/powerplant/hallway'>Hallway</Link>
				</>
			);
		}
	}
	return (
		<>
			<p>PowerPlant: Lobby</p>
			<p>
				You are in the lobby of the power plant. You can tell that cleaning is
				not a priority for the current owner.
			</p>
			<p>{props.message}</p>
			<p>Travel</p>
			{openDoor()}
			<Link to='/game/powerplant/airvent'>Climb into vent</Link>
			<Link to='/game/scrapyard/'>Return to Scrapyard</Link>
		</>
	);
}

export default Lobby;
