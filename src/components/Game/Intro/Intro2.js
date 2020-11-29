// import React
import React from 'react';
import { Link } from 'react-router-dom';
// import firebase
import firebaseDb from '../../Firebase/firebase';

function Intro2(props) {
	// add character to database
	React.useEffect(() => {
		let { name } = props.name;
		let char = props.char;
		let stat = props.stat;
		let inven = props.inven;
		let powerPro = props.powerPro;
		let hpMax = 20 + 10 * props.stat.str + 10 * props.stat.end;
		let epMax = 20 + 10 * props.stat.end + 10 * props.stat.wil;
		stat = {
			...stat,
			cun: stat.cun + 1,
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
		<div className='gameDisplay'>
			<p>
				You take a moment to examine the lock; its pretty simple so you get your
				lock pick out and begin working on the lock. You successfully pick the
				lock in no time. You open the gate and step inside.
			</p>
			<div className='gameList'>
				<Link to='/game/scrapyard'>Continue</Link>
			</div>
		</div>
	);
}

export default Intro2;
