// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Hallway(props) {
	React.useEffect(() => {
		props.setMessage('');
	}, []);
	// Basic Display for top of screen
	function Display() {
		if (props.powerPro.trap1 === false) {
			return (
				<>
					<p>
						You walk into the hallway.{' '}
						{props.stat.per > 4 ? (
							<>You notice that the floor is electrified.</>
						) : null}
					</p>
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
		return <p>First Trap done</p>;
	}
	// actions for traps
	function Display2() {
		if (props.powerPro.trap1 === false) {
			return <>{Trap1()}</>;
		} else if (props.powerPro.trap2 === false) {
			return <>{Trap2()}</>;
		}
	}
	return (
		<>
			{Display()}
			{props.message}
			{props.powerPro.trap3 ? null : <p>Actions</p>}
			{Display2()}
			<p>Travel</p>
			<Link to='/game/powerplant/lobby'>Return to Lobby</Link>
		</>
	);
}

export default Hallway;
