// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Hallway(props) {
	const [shieldHP, setShieldHP] = React.useState(30);
	React.useEffect(() => {
		let message = '';
		if (props.locationStor === true) {
			if (props.powerPro.trap4 === true && props.powerPro.trap1 === false) {
				message =
					'You enter the hallway and notice a electrified floor. You find the switch to turn it off. ';
				let powerPro = props.powerPro;
				props.setPowerPro({ ...powerPro, trap1: true, door: true });
			}
		}
		props.setLocationStor(false);
		props.setMessage(message);
	}, []);
	// Basic Display for top of screen
	function Display() {
		if (props.powerPro.trap1 === false) {
			return (
				<>
					<p>
						You walk into the hallway.
						{props.stat.per > 4 ? (
							<>You notice that the floor is electrified.</>
						) : null}
					</p>
				</>
			);
		} else if (props.powerPro.trap2 === false) {
			return (
				<>
					<p>The end of the hallway is blocked by an energy shield.</p>
				</>
			);
		} else {
			return (
				<>
					<p>You are in the hallway of the Power Plant</p>
				</>
			);
		}
	}
	// Handles first Trap
	function handleTrap1A() {
		if (props.char.core === 2) {
			props.setMessage(
				"You walk down the hallway. The floor electrifies you. However due to your core you aren't harmed. Actually you feel energized"
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap1: true });
		} else {
			props.setMessage(
				'You walk down the hallway. The floor electrifies you. The pain overwhelms you and you pass out'
			);
			let stat = props.stat;
			let newEp = props.stat.ep / 2;
			props.setStat({ ...stat, ep: newEp });
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap1: true });
			props.history.push(`/game/powerplant/failed`);
		}
	}
	function handleTrap1B() {
		if (props.stat.int < 6) {
			props.setMessage('You are not smart enough to do this');
		} else {
			props.setMessage(
				'You manage to short circuit the floor making it safe to travel over.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap1: true });
		}
	}
	function handleTrap1C() {
		if (props.stat.agi < 5) {
			props.setMessage('You are not agile enough to do this');
		} else {
			props.setMessage(
				'You manage to cross the electrified floor without touching the floor. You find a switch that turns off the floor on the other side.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap1: true });
		}
	}
	// handles second trap
	function handleTrap2A() {
		let newHp = props.stat.hp - 10;
		let stat = props.stat;
		props.setStat({ ...stat, hp: newHp });
		let message = '';
		if (props.stat.wil < 6) {
			message =
				'You reach out your hand into the shield. It burns away at your hand and you lack the will power to force yourself through';
		} else {
			message =
				'You reach out your hand into the shield. It burns your hand however you can take the pain and you force your way through the shield and find the switch to turn it off.';
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap2: true });
		}
		if (newHp < 1) {
			message =
				message + ' However you have taken too much damage and pass out.';
			props.setMessage(message);
			props.history.push(`/game/powerplant/failed`);
		}
		props.setMessage(message);
	}
	function handleTrap2B() {
		if (props.stat.int < 7) {
			props.setMessage('You are not smart enough to do this');
		} else {
			props.setMessage(
				'You manage to overcharge the shield and it explodes. Luckily you were not harmed in the process.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap2: true });
		}
	}
	function handleTrap2C() {
		let newShieldHP = shieldHP - props.stat.str;
		setShieldHP(newShieldHP);
		if (newShieldHP > 20) {
			props.setMessage(
				"You bash away at the shield. You don't seem to make a difference"
			);
		} else if (newShieldHP > 10) {
			props.setMessage(
				'You bash away at the shield. The shield does seem to be weakening'
			);
		} else if (newShieldHP > 0) {
			props.setMessage('You bash away at the shield. It is almost failing');
		} else if (newShieldHP < 1) {
			props.setMessage('The shield has failed allowing you to pass.');
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap2: true });
		}
	}
	// First Trap
	function Trap1() {
		if (props.stat.per > 4) {
			return (
				<>
					<div onClick={handleTrap1A}>
						Walk into it. Whats the worst that can happen?
					</div>
					<div onClick={handleTrap1B}>Try to short circuit it</div>
					<div onClick={handleTrap1C}>
						Try to cross it by traveling over it using the ceiling
					</div>
				</>
			);
		} else {
			return <div onClick={handleTrap1A}>Continue</div>;
		}
	}
	// Second Trap
	function Trap2() {
		return (
			<>
				<div onClick={handleTrap2A}>Try to walk through it</div>
				<div onClick={handleTrap2B}>Try to disable it</div>
				<div onClick={handleTrap2C}>Try to break it down</div>
			</>
		);
	}
	// actions for traps
	function Display2() {
		if (props.powerPro.trap1 === false) {
			return <>{Trap1()}</>;
		} else if (props.powerPro.trap2 === false) {
			return <>{Trap2()}</>;
		}
	}
	// access to generator
	function GeneratorDisplay() {
		if (props.powerPro.boss < 2) {
			return <Link to='/game/powerplant/boss/intro'>Generator Room</Link>;
		} else {
			return <Link to='/game/powerplant/generator'>Generator Room</Link>;
		}
	}
	return (
		<div className='gameDisplay'>
			{Display()}
			{props.message}
			{props.powerPro.trap2 ? null : <p>Actions</p>}
			{Display2()}
			<p>Travel</p>
			<div className='gameList'>
				<Link to='/game/powerplant/lobby'>Return to Lobby</Link>
				{props.powerPro.trap1 ? (
					<Link to='/game/powerplant/storageroom'>Storage Room</Link>
				) : null}
				{props.powerPro.trap2 ? GeneratorDisplay() : null}
			</div>
		</div>
	);
}

export default Hallway;
