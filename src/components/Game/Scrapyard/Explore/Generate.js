// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function Generate(props) {
	const { url, path } = useRouteMatch();
	React.useEffect(() => {
		// set att move set electric, fire, physical
		let random = Math.floor(3 * Math.random());
		if (random === 0) {
			let newStat = {
				str: 1,
				end: 1,
				wil: 1,
				int: 1,
				cun: 1,
				per: 3,
				agi: 1,
				hp: 40,
				hpMax: 40,
				ep: 40,
				epMax: 40,
			};
			props.setEAttSet(0);
			props.setEName('Electric Mouse');
			props.setEStat(newStat);
		} else if (random === 1) {
			let newStat = {
				str: 2,
				end: 1,
				wil: 3,
				int: 4,
				cun: 1,
				per: 6,
				agi: 1,
				hp: 50,
				hpMax: 50,
				ep: 60,
				epMax: 60,
			};
			props.setEAttSet(1);
			props.setEName('Hell Hound');
			props.setEStat(newStat);
		} else {
			let newStat = {
				str: 2,
				end: 4,
				wil: 1,
				int: 1,
				cun: 1,
				per: 2,
				agi: 1,
				hp: 80,
				hpMax: 80,
				ep: 70,
				epMax: 70,
			};
			props.setEAttSet(2);
			props.setEName('Armored Squire');
			props.setEStat(newStat);
		}
	}, []);
	

	props.history.push(`/game/scrapyard/explore/result/2`);
	return <p>Generate</p>;
}

export default Generate;
