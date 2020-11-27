// import React
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
// import Boss attacks
import PopShot from './BossFunctions/PopShot';

function Landing(props) {
	const { url, path } = useRouteMatch();
	// handles moving
	function handleMove(event) {
        let target = ''
        let value = 0
		if (event.target.value === 'console') {
			target = 'Dr. Crackle';
			value = 3;
		} else {
			target = 'Catwalk';
			value = 2;
		}
		if (crackleState === 0) {
			let random = Math.floor(props.stat.agi * Math.random());
			if (random < 3) {
				let ep = props.stat.ep;
				PopShot(
					props.eStat.cun,
					props.eStat.int,
					ep,
					props.stat,
					props.setStat
				);
				if (ep < 1) {
					props.setMessage(
						'Dr. Crackle manages to shoot you with his pistol shorting you out.'
					);
					props.history.push(`/game/powerplant/fight/defeat`);
				} else {
					props.setMessage(
						'Dr. Crackle manages to shoot you with his pistol. He calls out, "Got you!"'
					);
					props.history.push(`/game/powerplant/fight/${value}`);
				}
			} else {
				setMessage(
					'Dr. Crackle takes a shot at you with his pistol but misses. You successfully reach the ' + {target} + '. Dr. Crackle commits, "Just stay still will you!"'
				);
				props.setLocation(value);
				props.history.push(`/game/powerplant/fight/${value}`);
			}
		} else if (crackleState === 1) {
			setMessage(
				"You successfully reach the " + {target} + ". Dr. Crackle doesn't seem to care that you moved."
			);
			props.setLocation(value);
			props.history.push(`/game/powerplant/fight/${value}`);
		} 
	}
	// Sets the attack options for user
	function WeaponType() {
		if (props.inven.weapon === 'Hammer') {
			return <p>You are not in melee range to use your hammer</p>;
		} else if (props.inven.weapon === 'Rifle') {
			return null;
		} else if (props.inven.weapon === 'Bow') {
			return null;
		}
	}
	return (
		<>
			You are on the Catwalk
			{props.message}
			<p>{props.eName} Status</p>
			<p>
				Health: {props.eStat.hp}/{props.eStat.hpMax}
			</p>
			<p>
				Energy: {props.eStat.ep}/{props.eStat.epMax}
			</p>
			<div className='fightMobile'>
				<p>{props.name.name} Status</p>
				<p>
					Health: {props.stat.hp}/{props.stat.hpMax}
				</p>
				<p>
					Energy: {props.stat.ep}/{props.stat.epMax}
				</p>
			</div>
			<p>Actions</p>
			{WeaponType}
			<p>Move to</p>
			<div onClick={handleMove} value='Console'>
				Dr. Crackle
			</div>
			<div onClick={handleMove} value='Catwalk'>
				Catwalk
			</div>
		</>
	);
}

export default Landing;
