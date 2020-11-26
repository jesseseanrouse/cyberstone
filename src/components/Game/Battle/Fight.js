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

function Fight(props) {
	function EAttack() {
		let random = Math.floor(6 * Math.random());
		if (props.eAttSet === 0) {
			if (random < 3) {
				ShockAtt(
					props.eStat.cun,
					props.eStat.int,
					props.stat.hp,
					props.stat.ep,
					props.stat,
					props.setStat
				);
			} else if (random < 5) {
				ChargeAtt(
					props.eStat.cun,
					props.eStat.int,
					props.stat.ep,
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
					props.stat.hp,
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
					props.stat.hp,
					props.stat,
					props.setStat
				);
			} else if (random < 5) {
				FlameClaw(
					props.eStat.str,
					props.eStat.wil,
					props.stat.hp,
					props.stat,
					props.setStat
				);
			} else {
				FireBreath(
					props.eStat.int,
					props.eStat.wil,
					props.stat.hp,
					props.stat,
					props.setStat
				);
			}
		} else if (props.eAttSet > 1) {
			if (random < 3) {
				ShieldBash(
					props.eStat.str,
					props.eStat.end,
					props.stat.hp,
					props.stat,
					props.setStat
				);
			} else if (random < 5) {
				HammerStrike(
					props.eStat.str,
					props.eStat.end,
					props.stat.hp,
					props.stat,
					props.setStat
				);
			} else {
				ShieldSlam(
					props.eStat.str,
					props.eStat.end,
					props.stat.hp,
					props.stat,
					props.setStat
				);
			}
		}
	}

	return (
		<>
			<p>Enemy Status</p>
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
		</>
	);
}

export default Fight;
