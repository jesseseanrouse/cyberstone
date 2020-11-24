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
        let inven = props.inven
		stat = { ...stat, str: stat.str + 1 };
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
				You strike at the gate with your hand; the gate rattles under your blow.
				A smile strikes your face and you realize just how easy its going to be.
				You only strike the gate a few more times before it comes crashing down.
			</p>
			<Link to='/game/scrapyard'>Continue</Link>
		</>
	);
}

export default Intro1;
