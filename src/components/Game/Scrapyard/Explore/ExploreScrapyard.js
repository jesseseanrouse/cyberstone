// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function ExploreScrapyard(props) {
	const { url, path } = useRouteMatch();
	// returns 0 - 10 with 10 being very unlikely
	let random = Math.floor(10 * Math.random());
	// if (random < 3) {
	//     props.history.push(`/game/scrapyard/explore/result/1`);
	// } else if (random < 8) {
	//     props.history.push(`/game/scrapyard/explore/result/1`);
	// } else if (random < 10) {
	if (random < 10) {
		let check = props.check;
		let newScrap = props.newScrap;
		let newECom = props.newECom;
		let per = props.stat.per;
		let random = Math.floor(per * Math.random() + 1);
		if (random < 3) {
			check = false;
		} else if (random < 6) {
			newScrap = Math.floor(2 * Math.random() + 1);
			newECom = Math.floor(2 * Math.random());
			check = true;
		} else if (random < 8) {
			newScrap = Math.floor(3 * Math.random() + 2);
			newECom = Math.floor(3 * Math.random());
			check = true;
		} else {
			newScrap = Math.floor(4 * Math.random() + 3);
			newECom = Math.floor(4 * Math.random());
			check = true;
		}
		if (check === true) {
			if (newScrap === 0 && newECom === 0) {
				newScrap = 1;
			}
		}
		let inven = props.inven;
		inven = {
			...inven,
			scrp: props.inven.scrp + newScrap,
			ecom: props.inven.ecom + newECom,
		};
		props.setCheck(check);
		props.setNewScrap(newScrap);
		props.setNewECom(newECom);
		props.setInven(inven);
		props.history.push(`/game/scrapyard/explore/result/1`);
	} else if (random === 10) {
		let check = props.check;
		let newScrap = props.newScrap;
		let newECom = props.newECom;
        newScrap = Math.floor(5 * Math.random() + 5);
		newECom = Math.floor(5 * Math.random() + 2);
		check = true;
		props.history.push(`/game/scrapyard/explore/result/1`);
	}
	return null;
}

export default ExploreScrapyard;
