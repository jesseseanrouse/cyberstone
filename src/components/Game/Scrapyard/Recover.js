// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import WakeUp from './WakeUp'

function Recover(props) {
    const { url, path } = useRouteMatch();
	React.useEffect(() => {
		let check1 = false;
		let check2 = false;
		let newStat = props.stat;
		let hp = props.stat.hp;
		let hpMax = props.stat.hpMax;
		let ep = props.stat.ep;
		let epMax = props.stat.epMax;
		let newHp = 0;
		let newEp = 0;
		if (hp < hpMax / 2) {
			check1 = true;
			newHp = props.stat.hpMax / 2;
		}
		if (ep < epMax / 2) {
			check2 = true;
			newEp = props.stat.epMax / 2;
		}
		if (check1 === true && check2 === true) {
			props.setStat({ ...newStat, hp: newHp, ep: newEp });
		} else if (check1 === true) {
			props.setStat({ ...newStat, hp: newHp });
		} else if (check2 === true) {
			props.setStat({ ...newStat, ep: newEp });
		}
		props.history.push(`/game/scrapyard/wakeup`);
	}, []);
	return <WakeUp />
}

export default Recover;
