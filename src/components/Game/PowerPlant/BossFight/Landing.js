// import React
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
// import Boss attacks
import PopShot from './BossFunctions/PopShot';
import ShockShot from './BossFunctions/ShockShot';
import Charge from './BossFunctions/Charge';
import Thunderbolt from './BossFunctions/ThunderBolt2';

function Landing(props) {
	const { url, path } = useRouteMatch();
	// handles moving
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
					props.history.push(`/game/powerplant/boss/fight/3`);
				}
			} else {
				props.setMessage(
					'Dr. Crackle takes a shot at you with his pistol but misses. You successfully reach the center of the room. Dr. Crackle commits, "Just stay still will you!"'
				);
				props.setLocation(3);
				props.history.push(`/game/powerplant/boss/fight/3`);
			}
		} else if (props.crackleState === 1) {
			props.setMessage(
				"You successfully reach the center of the room. Dr. Crackle doesn't seem to care that you moved."
			);
			props.setLocation(3);
			props.history.push(`/game/powerplant/boss/fight/3`);
		}
    }
    function handleMove2() {
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
						props.history.push(`/game/powerplant/boss/fight/2`);
					}
				} else {
					props.setMessage(
						'Dr. Crackle takes a shot at you with his pistol but misses. You successfully reach the catwalk. Dr. Crackle commits, "Just stay still will you!"'
					);
					props.setLocation(2);
					props.history.push(`/game/powerplant/boss/fight/2`);
				}
			} else if (props.crackleState === 1) {
				props.setMessage(
					"You successfully reach the catwalk. Dr. Crackle doesn't seem to care that you moved."
				);
				props.setLocation(2);
				props.history.push(`/game/powerplant/boss/fight/2`);
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
			let attack = Math.floor(props.eStat.cun * random());
			if (attack > dodge) {
				ShockShot(
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
			let attack = Math.floor(props.eStat.int * random());
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
			props.history.push(`/game/powerplant/boss/fight/1`);
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
			You are on the Landing
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
			{WeaponType()}
			<p>Move to</p>
			<div onClick={handleMove} >
				Dr. Crackle
			</div>
			<div onClick={handleMove2} >
				Catwalk
			</div>
		</>
	);
}

export default Landing;
