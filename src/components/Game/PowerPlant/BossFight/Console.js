// import React
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
import HammerStrike from './UserFunctions/HammerStrike';
import HammerCore from './UserFunctions/HammerCore';
// import Boss attacks
import Counter from './BossFunctions/Counter';
import PopShot from './BossFunctions/PopShot';

function CatWalk(props) {
	const { url, path } = useRouteMatch();
	// handles moving to landing
	function handleMove() {
		if (props.crackleState === 0) {
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
					props.history.push(`/game/powerplant/fight/1`);
				}
			} else {
				props.setMessage(
					'Dr. Crackle takes a shot at you with his pistol but misses. You successfully reach the landing. Dr. Crackle commits, "Just stay still will you!"'
				);
				props.setLocation(1);
				props.history.push(`/game/powerplant/fight/1`);
			}
		} else if (props.crackleState === 1) {
			props.setMessage(
				"You successfully reach the landing. Dr. Crackle doesn't seem to care that you moved."
			);
			props.setLocation(1);
			props.history.push(`/game/powerplant/fight/1`);
		}
	}
	// Hammer Attacks
	function handleHammerStrike() {
		let random = Math.floor(props.stat.wil * Math.random());
		let message = '';
		if (random < 2) {
			let ep = props.stat.ep;
			Counter(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/fight/3`);
			}
		} else {
            let ehp = props.eStat.hp
			HammerStrike(
				props.stat.str,
				props.stat.end,
				ehp,
				props.eStat,
				props.setEStat
			);
			if (ehp < 1) {
				props.setMessage('You strike Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/fight/victory`);
			} else {
				message = 'You strike Dr. Crackle with your hammer. '
				props.history.push(`/game/powerplant/fight/3`);
			}
		}
	}
	function handleHammerCore() {
		let random = Math.floor(props.stat.wil * Math.random());
		let message = '';
		if (random < 2) {
			let ep = props.stat.ep;
			Counter(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/fight/3`);
			}
		} else {
            let ehp = props.eStat.hp
            let eep = props.eStat.ep
			HammerCore(
				props.stat.str,
				props.stat.end,
                props.stat.cun,
                props.stat.wil,
				ehp,
				eep,
				props.eStat,
				props.setEStat,
				props.char.core,
				props.onFire,
				props.setOnFire, message
			);
			if (ehp < 1 || eep < 1) {
				props.setMessage('You strike Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/fight/victory`);
			} else {
				props.history.push(`/game/powerplant/fight/3`);
			}
		}
	}
	// Sets the attack options for user
	function WeaponType() {
		if (props.inven.weapon === 'Hammer') {
			return (
				<>
					<div onclick={handleHammerStrike}>Hammer Strike</div>
					<div onclick={handleHammerCore}>Hammer Core Strike</div>
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
