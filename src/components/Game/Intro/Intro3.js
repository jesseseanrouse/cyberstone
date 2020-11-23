// import React
import React from 'react';
import { Link } from 'react-router-dom';
// import firebase
import firebaseDb from '../../Firebase/firebase';

function Intro3(props) {
	// add character to database
	React.useEffect(() => {
		let { name } = props.name;
		let char = props.char;
		let stat = props.stat;
		stat = { ...stat, per: stat.per + 1 };
		props.setStat(stat);
		let data = { name, char, stat };
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
				You take a moment to examine the gate and the wall. You notice a gap in
				the wall that you can easily fit through. A smile comes across your face
				as you step through the gap. This is going to be easy.
			</p>
			<Link to='/game/scrapyard'>Continue</Link>
		</>
	);
}

export default Intro3;
