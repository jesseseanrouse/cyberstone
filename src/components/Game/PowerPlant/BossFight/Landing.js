// import React
import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
import BowShot from './UserFunctions/BowShot';
import BowCore from './UserFunctions/BowCore';
import RifleShot from './UserFunctions/RifleShot';
import RifleCore from './UserFunctions/RifleCore';
// import Boss attacks
import PopShot from './BossFunctions/PopShot';
import ShockShot from './BossFunctions/ShockShot';
import Charge from './BossFunctions/Charge';
import Thunderbolt from './BossFunctions/ThunderBolt2';

function Landing(props) {
	const { url, path } = useRouteMatch();
	useEffect(() => {
		if (props.stat.hp < 1) {
			props.history.push(`/game/powerplant/boss/fight/defeat`);
		}
	}, [props.stat.hp]);
	useEffect(() => {
		if (props.stat.ep < 1) {
			props.history.push(`/game/powerplant/boss/fight/defeat`);
		}
	}, [props.stat.ep]);
	useEffect(() => {
		if (props.eStat.hp < 1) {
			props.history.push(`/game/powerplant/boss/fight/victory`);
		}
	}, [props.eStat.hp]);
	useEffect(() => {
		if (props.eStat.ep < 1) {
			props.history.push(`/game/powerplant/boss/fight/victory`);
		}
	}, [props.eStat.ep]);
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
			let attack = Math.floor(props.eStat.cun * Math.random());
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
			props.history.push(`/game/powerplant/boss/fight/1`);
		}
	}
	// handles Rifle Shot
	function handleRifleShot() {
		let random = Math.floor(props.stat.per * Math.random());
		let message = '';
		if (random < 2) {
			let ep = props.stat.ep;
			PopShot(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your rifle. He shoots you with his pistol. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your rifle. He shoots you with his pistol. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/1`);
			}
		} else {
			let ehp = props.eStat.hp;
			RifleShot(
				props.stat.int,
				props.stat.cun,
				ehp,
				props.eStat,
				props.setEStat,
				0
			);
			if (ehp < 1) {
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				message = 'You shoot Dr. Crackle with your rifle. ';
				props.history.push(`/game/powerplant/boss/fight/1`);
				BossAction(message);
			}
		}
	}
	// handles Bow Shot
	function handleBowShot() {
		let random = Math.floor(props.stat.agi * Math.random());
		let message = '';
		if (random < 2) {
			let ep = props.stat.ep;
			PopShot(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your bow. He shoots you with his pistol. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your bow. He shoots you with his pistol. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/1`);
			}
		} else {
			let ehp = props.eStat.hp;
			BowShot(
				props.stat.str,
				props.stat.wil,
				ehp,
				props.eStat,
				props.setEStat,
				0
			);
			if (ehp < 1) {
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				message = 'You shoot Dr. Crackle with your bow. ';
				props.history.push(`/game/powerplant/boss/fight/1`);
				BossAction(message);
			}
		}
	}
	// Handles Bow Core
	function handleBowCore() {
		let random = Math.floor(props.stat.agi * Math.random());
		let message = '';
		if (random < 2) {
			let ep = props.stat.ep;
			PopShot(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your bow. He shoots you with his pistol. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your bow. He shoots you with his pistol. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/1`);
			}
		} else {
			let ehp = props.eStat.hp;
			let eep = props.eStat.ep;
			BowCore(
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
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				props.history.push(`/game/powerplant/boss/fight/1`);
				BossAction(message);
			}
		}
	}
	// Handles Rifle Core
	function handleRifleCore() {
		let random = Math.floor(props.stat.per * Math.random());
		let message = '';
		if (random < 2) {
			let ep = props.stat.ep;
			PopShot(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your rifle. He shoots you with his pistol. He taunts you, "Good Night!"'
				);
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle dodges your attempt to shoot him with your rifle. He shoots you with his pistol. He taunts you, "Ha! Missed!"'
				);
				props.history.push(`/game/powerplant/boss/fight/1`);
			}
		} else {
			let ehp = props.eStat.hp;
			let eep = props.eStat.ep;
			RifleCore(
				props.stat.int,
				props.stat.str,
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
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				props.history.push(`/game/powerplant/boss/fight/1`);
				BossAction(message);
			}
		}
	}
	// Sets the attack options for user
	function WeaponType() {
		if (props.inven.weapon === 'Hammer') {
			return <p>You are not in melee range to use your hammer</p>;
		} else if (props.inven.weapon === 'Rifle') {
			return (
				<>
					<div onClick={handleRifleShot}>Rifle Shot</div>
					<div onClick={handleRifleCore}>Rifle Core Shot</div>
				</>
			);
		} else if (props.inven.weapon === 'Bow') {
			return (
				<>
					<div onClick={handleBowShot}>Bow Shot</div>
					<div onClick={handleBowCore}>Bow Core Shot</div>
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
				<div onClick={handleMove}>Dr. Crackle</div>
				<div onClick={handleMove2}>Catwalk</div>
			</div>
		</div>
	);
}

export default Landing;
