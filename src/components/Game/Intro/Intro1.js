// import React
import React from 'react';
// import firebase
import firebaseDb from '../../Firebase/firebase';

function Intro1(props) {
	React.useEffect(() => {
		let char = props.char;
		let stat = props.stat;
		let data = { char, stat };
		firebaseDb
			.child(`users/${props.userID}/characters`)
			.push(data)
			.on('value', (snapshot) => {
				
                    let key = snapshot.key
					props.setCharID(key);
				
            })
    }, []);
    console.log(props.charID)
	return (
		<>
			<p>CharID: {props.CharID}</p>
		</>
	);
}

export default Intro1;
