// import React
import React from 'react';
// import firebase
import firebaseDb from '../../Firebase/firebase';

function Intro3(props) {
	// add character to database
	React.useEffect(() => {
		let char = props.char;
		let stat = props.stat;
		stat = { ...stat, per: stat.per + 1 };
		props.setStat(stat);
		let data = { char, stat };
		firebaseDb
			.child(`users/${props.userID}/characters`)
			.push(data)
			.on('value', (snapshot) => {
				let key = snapshot.key;
				props.setCharID(key);
			});
	}, []);
	return <p>Success 3</p>;
}

export default Intro3;
