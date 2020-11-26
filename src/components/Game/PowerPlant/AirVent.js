// import react
import React from 'react';
import { Link } from 'react-router-dom';

function AirVent(props) {
	React.useEffect(() => {
		props.setMessage('');
	}, []);
	// Basic Display for top of screen
	function Display() {
		if (props.powerPro.trap4 === false) {
			return (
				<>
					<p>
						You are in the air vent. You see a fan blade spinning rapidly. It
						also seems to be very sharp.
					</p>
				</>
			);
		} else if (props.powerPro.trap5 === false) {
			return (
				<>
					<p>You are in the vent.</p>
				</>
			);
		} else {
			return (
				<>
					<p>You are in the vent.</p>
				</>
			);
		}
	}
	// Handles first Trap
	function handleTrap1A() {
		if (props.stat.str < 5) {
			props.setMessage('You are not strong enough to break this');
		} else {
			props.setMessage(
				'You manage to kick the fan out of alignment and it spins out of control.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap4: true });
		}
	}
	function handleTrap1B() {
		if (props.inven.scrp === 0) {
			props.setMessage("You don't have any scrap metal to jam it");
		} else {
			if (props.stat.cun < 6) {
				props.setMessage('You are not cunning enough to do this');
			} else {
				props.setMessage(
					'You manage to jam the fan using a piece of scrap metal.'
				);
				let scrp = props.inven.scrp - 1;
				props.setInven({ ...props.inven, scrp: scrp });
				let powerPro = props.powerPro;
				props.setPowerPro({ ...powerPro, trap4: true });
			}
		}
	}
	function handleTrap1C() {
		let newHp = props.stat.hp - 75;
		let stat = props.stat;
		props.setStat({ ...stat, hp: newHp });
		let message =
			'You try to crawl through it but you get stuck in it. Good news is that the fan is now broken but bad news is that you took a lot of damage';
		if (newHp < 1) {
			message = message + ' You have taken too much damage and pass out.';
			props.setMessage(message);
			props.history.push(`/game/powerplant/failed`);
		}
		props.setMessage(message);
		let powerPro = props.powerPro;
		props.setPowerPro({ ...powerPro, trap4: true });
	}
	// First Trap
	function Trap1() {
		return (
			<>
				<div onClick={handleTrap1A}>Try to break it</div>
				<div onClick={handleTrap1B}>Try to jam it up</div>
				<div onClick={handleTrap1C}>Try to crawl through it</div>
			</>
		);
	}
	// actions for traps
	function Display2() {
		if (props.powerPro.trap4 === false) {
			return <>{Trap1()}</>;
		}
	}
	return (
		<>
			{Display()}
			{props.message}
			{props.powerPro.trap5 ? null : <p>Actions</p>}
			{Display2()}
			<p>Travel</p>
			<Link to='/game/powerplant/lobby'>Return to Lobby</Link>
			{props.powerPro.trap4 ? (
				<Link to='./game/powerplant/storageroom'>Storage Room</Link>
			) : null}
		</>
	);
}

export default AirVent;
