// import React
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
import Counter from './BossFunctions/Counter';
import PopShot from './BossFunctions/PopShot';

function CatWalk(props) {
	const { url, path } = useRouteMatch();
	
	// handles moving to landing
	function handleMove() {
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
					props.history.push(`/game/powerplant/fight/3`);
				}
			} else {
				setMessage(
					'Dr. Crackle takes a shot at you with his pistol but misses. You successfully reach the landing. Dr. Crackle commits, "Just stay still will you!"'
				);
				props.setLocation(1);
				props.history.push(`/game/powerplant/fight/1`);
			}
		} else if (crackleState === 1) {
			setMessage(
				"You successfully reach the landing. Dr. Crackle doesn't seem to care that you moved."
			);
			props.setLocation(1);
			props.history.push(`/game/powerplant/fight/1`);
		} 
	}
	// Sets the attack options for user
	function WeaponType() {
		if (props.inven.weapon === 'Hammer') {
			return (
				<>
					<div onclick={}></div>
					<div onclick={}></div>
				</>
			);
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
			<div onClick={handleMove}>Landing</div>
		</>
	);
}

export default CatWalk;
