// import React
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
import HammerStrike from './UserFunctions/HammerStrike';
import HammerCore from './UserFunctions/HammerCore';
import Bash from './UserFunctions/Bash';
// import Boss attacks
import Counter from './BossFunctions/Counter';
import PopShot from './BossFunctions/PopShot';
import ShockStrike from './BossFunctions/ShockStrike';
import Charge from './BossFunctions/Charge';
import Thunderbolt from './BossFunctions/ThunderBolt2';

function Console(props) {
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
					props.history.push(`/game/powerplant/boss/fight/defeat`);
				} else {
					props.setMessage(
						'Dr. Crackle manages to shoot you with his pistol. He calls out, "Got you!"'
					);
					props.history.push(`/game/powerplant/boss/fight/1`);
				}
			} else {
				props.setMessage(
					'Dr. Crackle takes a shot at you with his pistol but misses. You successfully reach the landing. Dr. Crackle commits, "Just stay still will you!"'
				);
				props.setLocation(1);
				props.history.push(`/game/powerplant/boss/fight/1`);
			}
		} else if (props.crackleState === 1) {
			props.setMessage(
				"You successfully reach the landing. Dr. Crackle doesn't seem to care that you moved."
			);
			props.setLocation(1);
			props.history.push(`/game/powerplant/boss/fight/1`);
		}
	}
	// handles Boss
	function BossAction(message) {
		let hp = props.stat.hp;
		let ep = props.stat.ep;
		let random = Math.floor(6 * Math.random());
		let check = false;
		let dodge = Math.floor(props.stat.agi * Math.random());
		if (random < 3) {
			let attack = Math.floor(props.eStat.cun * Math.random());
			if (attack > dodge) {
				ShockStrike(
					props.eStat.cun,
					props.eStat.int,
					ep,
					props.stat,
					props.setStat
				);
				message = message + 'Dr. Crackle strikes you with his shock hand. ';
			} else {
				message =
					message +
					'Dr. Crackle tries to strike you with his shock hand but misses. ';
			}
		} else if (random < 5) {
			Charge(
				props.eStat.cun,
				props.eStat.int,
				ep,
				props.stat,
				props.setStat,
				props.crackleState,
				props.setCrackleState,
				props.location,
				props.message,
				check
			);
		} else {
			let attack = Math.floor(props.eStat.int * Math.random());
			if (attack > dodge) {
				Thunderbolt(
					props.eStat.cun,
					props.eStat.int,
					hp,
					ep,
					props.stat,
					props.setStat
				);
				message =
					message +
					'Dr. Crackle unleashes a massive thunderbolt at you and strikes you with it. ';
			} else {
				message =
					message +
					'Dr. Crackle unleashes a massive thunderbolt at you but misses. ';
			}
		}
		if (ep < 1 || hp < 1) {
			props.setMessage(
				message + 'You have taken too much damage and pass out.'
			);
			props.history.push(`/game/powerplant/boss/fight/defeat`);
		} else {
			props.setMessage(message + 'Ha Ha HA HA');
			props.history.push(`/game/powerplant/boss/fight/3`);
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
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/3`);
			}
		} else {
			let ehp = props.eStat.hp;
			HammerStrike(
				props.stat.str,
				props.stat.end,
				ehp,
				props.eStat,
				props.setEStat
			);
			if (ehp < 1) {
				props.setMessage('You strike Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				message = 'You strike Dr. Crackle with your hammer. ';
				props.history.push(`/game/powerplant/boss/fight/3`);
				BossAction(message);
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
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/3`);
			}
		} else {
			let ehp = props.eStat.hp;
			let eep = props.eStat.ep;
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
				props.setOnFire,
				message
			);
			if (ehp < 1 || eep < 1) {
				props.setMessage('You strike Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				props.history.push(`/game/powerplant/boss/fight/3`);
				BossAction(message);
			}
		}
	}
	// handles bash
	function handleBash() {
		let random = Math.floor(props.stat.wil * Math.random());
		let message = '';
		if (random < 4) {
			let ep = props.stat.ep;
			Counter(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle dodges your attempt to hit him with your weapon. He strikes you with his shocker hand. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle dodges your attempt to hit him with your weapon. He strikes you with his shocker hand. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/3`);
			}
		} else {
			let ehp = props.eStat.hp;
			Bash(props.stat.str, props.stat.end, ehp, props.eStat, props.setEStat);
			if (ehp < 1) {
				props.setMessage('You strike Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				message = 'You strike Dr. Crackle with your weapon. ';
				props.history.push(`/game/powerplant/boss/fight/3`);
				BossAction(message);
			}
		}
	}
	// Sets the attack options for user
	function WeaponType() {
		if (props.inven.weapon === 'Hammer') {
			return (
				<>
					<div onClick={handleHammerStrike}>Hammer Strike</div>
					<div onClick={handleHammerCore}>Hammer Core Strike</div>
				</>
			);
		} else if (props.inven.weapon === 'Rifle') {
			return (
				<>
					<div onClick={handleBash}>Bash him with the butt of your Rifle</div>
					<p>You are too close to shoot him</p>
				</>
			);
		} else if (props.inven.weapon === 'Bow') {
			return (
				<>
					<div onClick={handleBash}>Bash him with your bow</div>
					<p>You are too close to shoot him</p>
				</>
			);
		}
	}
	function handleRecharge() {
		if (props.stat.ep >= props.stat.epMax) {
			props.setMessage('You are already at full energy');
		} else {
			let inven = props.inven;
			let battery = props.inven.battery - 1;
			props.setInven({ ...inven, battery: battery });
			let ep = props.stat.ep + 50;
			if (ep > props.stat.epMax) {
				ep = props.stat.epMax;
			}
			let stat = props.stat;
			props.setStat({ ...stat, ep: ep });
			props.setMessage('You used a battery metal to recharge yourself');
		}
	}
	function handleLack() {
		props.setMessage('You do not have any batteries');
	}
	return (
		<div className='gameDisplay'>
			You are in the center of the room with Dr. Crackle
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
			<div className='gameList'>
				{WeaponType()}
				{props.inven.battery > 0 ? (
					<div onClick={handleRecharge}>Recharge (+50 Ep, -1 Battery)</div>
				) : (
					<div onClick={handleLack}>Recharge (+50 Ep, -1 Battery)</div>
				)}
			</div>
			<p>Move to</p>
			<div className='gameList'>
				<div onClick={handleMove}>Landing</div>
			</div>
		</div>
	);
}

export default Console;
