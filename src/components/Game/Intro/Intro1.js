// import React
import React from 'react';
import { Link } from 'react-router-dom';
// import firebase
import firebaseDb from '../../Firebase/firebase';

function Intro1(props) {
	// add character to database
	React.useEffect(() => {
		let { name } = props.name;
		let char = props.char;
		let stat = props.stat;
		let inven = props.inven;
		let powerPro = props.powerPro
		let hpMax = 30 + 10 * props.stat.str + 10 * props.stat.end;
		let epMax = 20 + 10 * props.stat.end + 10 * props.stat.wil;
		stat = {
			...stat,
			str: stat.str + 1,
			hp: hpMax,
			hpMax: hpMax,
			ep: epMax,
			epMax: epMax,
		};
		props.setStat(stat);
		let data = { name, char, stat, inven, powerPro };
		firebaseDb
			.child(`users/${props.userID}/characters`)
			.push(data)
			.on('value', (snapshot) => {
				let key = snapshot.key;
				props.setCharID(key);
			});
	}, []);
	return (
		<>
			<p>
				You strike at the gate with your hand; the gate rattles under your blow.
				A smile strikes your face and you realize just how easy its going to be.
				You only strike the gate a few more times before it comes crashing down.
			</p>
			<Link to='/game/scrapyard'>Continue</Link>
		</>
	);
}

export default Intro1;
