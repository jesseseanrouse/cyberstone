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
		stat = { ...stat, cun: stat.cun + 1 };
		props.setStat(stat);
		let data = { name, char, stat, inven };
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
				You take a moment to examine the lock; its pretty simple so you get your
				lock pick out and begin working on the lock. You successfully pick the
				lock in no time. You open the gate and step inside.
			</p>
			<Link to='/game/scrapyard'>Continue</Link>
		</>
	);
}

export default Intro2;
