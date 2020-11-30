// import React
import React, { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
// import User Attacks
import JumpHammer from './UserFunctions/JumpHammer';
import BowShot from './UserFunctions/BowShot';
import BowCore from './UserFunctions/BowCore';
import RifleShot from './UserFunctions/RifleShot';
import RifleCore from './UserFunctions/RifleCore';
// import Boss attacks
import Counter from './BossFunctions/Counter';
import PopShot from './BossFunctions/PopShot';
import ShockShot from './BossFunctions/ShockShot';
import Charge from './BossFunctions/Charge';
import Thunderbolt from './BossFunctions/ThunderBolt2';

function CatWalk(props) {
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
	// unique action for hammer strike
	function handleJump() {
		if (props.jump === false) {
			let ehp = props.eStat.hp - 5 * props.onFire;
			JumpHammer(
				props.stat.str,
				props.stat.end,
				ehp,
				props.eStat,
				props.setEStat
			);
			props.setJump(true);
			props.setLocation(3);
			if (ehp < 1) {
				props.setMessage(
					'You take Dr. Crackle by surprise and smash him to the ground dealing the final blow.'
				);
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				props.setMessage(
					'You take Dr. Crackle by surprise and smash him to the ground dealing massive damage. Dr. Crackle quickly recovers laughing, "well played intruder. Lets see you do that again!"'
				);
				props.history.push(`/game/powerplant/boss/fight/3`);
			}
		} else {
			let ehp = props.eStat.hp - 5 * props.onFire;
			props.setEStat({ ...props.eStat, hp: ehp });
			let ep = props.stat.ep;
			Counter(props.eStat.cun, props.eStat.int, ep, props.stat, props.setStat);
			if (ep < 1) {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "that will only work once! Good Night!"'
				);
				props.history.push(`/game/powerplant/boss/fight/defeat`);
			} else {
				props.setMessage(
					'Dr. Crackle steps out of the way at the last second as you smash into the ground. He strikes you in the back with his shocker hand. He taunts you, "that will only work once!"'
				);
				props.history.push(`/game/powerplant/boss/fight/3`);
			}
		}
	}
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
			props.history.push(`/game/powerplant/fight/1`);
		} else if (props.crackleState === 2) {
			props.setMessage(
				'You successfully reach the landing. The catwalk suddenly sparks up. Dr. Crackle calls out, "You just had to move!"'
			);
			props.setLocation(1);
			props.setCrackleState(0);
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
			let attack = 0;
			if (props.crackleState === 0) {
				let random = Math.floor(2 * Math.random());
				if (random === 1) {
					if (props.location === 2) {
						props.setCrackleState(2);
					} else {
						props.setCrackleState(1);
					}
				} else {
					props.setCrackleState(1);
				}
				message =
					message +
					'Dr. Crackle starts to fiddle with his console, he seems to be up to something. ';
			} else if (props.crackleState === 1) {
				attack =
					3 * props.eStat.cun +
					2 * props.eStat.int +
					Math.floor(2 * props.eStat.int * Math.random());
				message =
					message +
					'Dr. Crackle unleashes power straight from the power generator and strikes you with it. ';
			} else if (props.crackleState === 2) {
				check = true;
				attack =
					2 * props.eStat.cun +
					props.eStat.int +
					Math.floor(props.eStat.int * Math.random());
				message =
					message +
					'Dr. Crackle unleashes power straight from the power generator into the catwalk electrifying you. You fall off the catwalk and land near Dr. Crackle.';
			}
			ep = ep - attack;
			props.setStat({ ...props.stat, ep: ep });
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
			props.history.push(`/game/powerplant/boss/fight/2`);
		}
	}
	// Handles Bow Core
	function handleBowCore() {
		let random = Math.floor(props.stat.agi * Math.random());
		let message = '';
		if (random < 2) {
			let ehp = props.eStat.hp - 5 * props.onFire;
			props.setEStat({ ...props.eStat, hp: ehp });
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
				props.history.push(`/game/powerplant/boss/fight/2`);
			}
		} else {
			let ehp = props.eStat.hp - 5 * props.onFire;
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
			message = 'You shoot Dr. Crackle with your bow. ';
			if (props.char.core === 3) {
				if (props.onFire === 0) {
					message = 'He is now on fire. ';
				} else {
					message = 'The fire is now hotter. ';
				}
			}
			if (ehp < 1 || eep < 1) {
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				props.history.push(`/game/powerplant/boss/fight/3`);
				BossAction(message);
			}
		}
	}
	// Handles Rifle Core
	function handleRifleCore() {
		let random = Math.floor(props.stat.per * Math.random());
		let message = '';
		if (random < 2) {
			let ehp = props.eStat.hp - 5 * props.onFire;
			props.setEStat({ ...props.eStat, hp: ehp });
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
				props.history.push(`/game/powerplant/boss/fight/2`);
			}
		} else {
			let ehp = props.eStat.hp - 5 * props.onFire;
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
			message = 'You shoot Dr. Crackle with your rifle. ';
			if (props.char.core === 3) {
				if (props.onFire === 0) {
					message = 'He is now on fire. ';
				} else {
					message = 'The fire is now hotter. ';
				}
			}
			if (ehp < 1 || eep < 1) {
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				props.history.push(`/game/powerplant/boss/fight/2`);
				BossAction(message);
			}
		}
	}
	// handles Rifle Shot
	function handleRifleShot() {
		let random = Math.floor(props.stat.per * Math.random());
		let message = '';
		if (random < 2) {
			let ehp = props.eStat.hp - 5 * props.onFire;
			props.setEStat({ ...props.eStat, hp: ehp });
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
				props.history.push(`/game/powerplant/boss/fight/2`);
			}
		} else {
			let ehp = props.eStat.hp - 5 * props.onFire;
			RifleShot(
				props.stat.int,
				props.stat.cun,
				ehp,
				props.eStat,
				props.setEStat,
				5
			);
			if (ehp < 1) {
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				message = 'You shoot Dr. Crackle with your rifle. ';
				props.history.push(`/game/powerplant/boss/fight/2`);
				BossAction(message);
			}
		}
	}
	// handles Bow Shot
	function handleBowShot() {
		let random = Math.floor(props.stat.agi * Math.random());
		let message = '';
		if (random < 2) {
			let ehp = props.eStat.hp - 5 * props.onFire;
			props.setEStat({ ...props.eStat, hp: ehp });
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
				props.history.push(`/game/powerplant/boss/fight/2`);
			}
		} else {
			let ehp = props.eStat.hp - 5 * props.onFire;
			BowShot(
				props.stat.str,
				props.stat.wil,
				ehp,
				props.eStat,
				props.setEStat,
				5
			);
			if (ehp < 1) {
				props.setMessage('You shoot Dr. Crackle dealing the final blow.');
				props.history.push(`/game/powerplant/boss/fight/victory`);
			} else {
				message = 'You shoot Dr. Crackle with your bow. ';
				props.history.push(`/game/powerplant/boss/fight/2`);
				BossAction(message);
			}
		}
	}
	// Sets the attack options for user
	function WeaponType() {
		if (props.inven.weapon === 'Hammer') {
			return <div onClick={handleJump}>Jump down and try to smash him</div>;
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

export default CatWalk;
