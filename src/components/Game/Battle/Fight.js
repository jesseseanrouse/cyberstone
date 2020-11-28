// import react
import React from 'react';
// import functions
// For set 0
import ShockAtt from './Functions/ShockAtt';
import ChargeAtt from './Functions/ChargeAtt';
import Thunderbolt from './Functions/Thunderbolt';
// for set 1
import Bite from './Functions/Bite';
import FlameClaw from './Functions/FlameClaw';
import FireBreath from './Functions/FireBreath';
// for set 2
import ShieldBash from './Functions/ShieldBash';
import ShieldSlam from './Functions/ShieldSlam';
import HammerStrike from './Functions/HammerStrike';
// for user
import WeaponStrike from './Functions/WeaponStrike';

function Fight(props) {
	// Messages
	React.useEffect(() => {
		props.setMessage('');
	}, []);
	function EAttack(hp, ep) {
		let random = Math.floor(6 * Math.random());
		if (props.eAttSet === 0) {
			if (random < 3) {
				ShockAtt(
					props.eStat.cun,
					props.eStat.int,
					hp,
					ep,
					props.stat,
					props.setStat
				);
			} else if (random < 5) {
				ChargeAtt(
					props.eStat.cun,
					props.eStat.int,
					ep,
					props.eStat.ep,
					props.eStat.maxEp,
					props.stat,
					props.setStat,
					props.eStat,
					props.setEStat
				);
			} else {
				Thunderbolt(
					props.eStat.cun,
					props.eStat.int,
					hp,
					props.stat.ep,
					props.stat,
					props.setStat
				);
			}
		} else if (props.eAttSet === 1) {
			if (random < 3) {
				Bite(
					props.eStat.str,
					props.eStat.wil,
					hp,
					props.stat,
					props.setStat
				);
			} else if (random < 5) {
				FlameClaw(
					props.eStat.str,
					props.eStat.wil,
					hp,
					props.stat,
					props.setStat
				);
			} else {
				FireBreath(
					props.eStat.int,
					props.eStat.wil,
					hp,
					props.stat,
					props.setStat
				);
			}
		} else if (props.eAttSet > 1) {
			if (random < 3) {
				ShieldBash(
					props.eStat.str,
					props.eStat.end,
					hp,
					props.stat,
					props.setStat
				);
			} else if (random < 5) {
				HammerStrike(
					props.eStat.str,
					props.eStat.end,
					hp,
					props.stat,
					props.setStat
				);
			} else {
				ShieldSlam(
					props.eStat.str,
					props.eStat.end,
					hp,
					props.stat,
					props.setStat
				);
			}
		}
		return (hp, ep)
	}
	function WStrike(hp, ep) {
		if (props.inven.weapon === 'Hammer') {
			WeaponStrike(
				props.stat.str,
				props.stat.end,
				hp,
				props.eStat,
				props.setEStat
			);
		} else if (props.inven.weapon === 'Rifle') {
			WeaponStrike(
				props.stat.int,
				props.stat.cun,
				hp,
				props.eStat,
				props.setEStat
			);
		} else if (props.inven.weapon === 'Bow') {
			WeaponStrike(
				props.stat.str,
				props.stat.wil,
				hp,
				props.eStat,
				props.setEStat
			);
		}
		return (hp, ep)
	}
	// handles a round of combat
	function handleCombat() {
		let message = '';
		let hp = props.eStat.hp;
		let ep = props.eStat.ep;
		WStrike(hp, ep);
		if (hp < 1 || ep < 1) {
			message = 'You have defeated the ' + props.eName;
			let random = Math.floor(props.stat.int * Math.random());
			let random2 = Math.floor((props.stat.int / 2) * Math.random());
            let random3 = Math.floor(2 * Math.random());
            let scrp = props.inven.scrp + random
            let ecom = props.inven.ecom + random2
            let battery = props.inven.battery + random3
            let inven = props.inven
            props.setInven({...inven, scrp: scrp, ecom: ecom, battery: battery})
            props.setMessage(message)
            props.history.push(`/game/battle/victory`);
		} else {
			message = 'You strike the ' + props.eName + ' with your weapon.';
			hp = props.stat.hp
			ep = props.stat.ep
			EAttack(hp, ep);
			if (hp < 1 || ep < 1) {
				message =
					'The ' + props.eName + ' has defeated you in combat. You pass out.';
				props.setMessage(message);
				props.history.push(`/game/battle/defeat`);
			} else {
				message = message + ' The ' + props.eName + ' attacked you.';
			}
		}
	}
	return (
		<>
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
			<div onClick={handleCombat}>Weapon Strike</div>
		</>
	);
}

export default Fight;
