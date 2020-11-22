// import react
import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList(props) {
	// let ref = firebaseDb.once('value').then(function (snapshot) {
	// 	let value = snapshot.child('users/-MMhsKoJHPqHh-S8d1Uz').val();
	// 	console.log(value);
	// });
    const handleClick = (event) => {
			// Prevent Form from Refreshing
			event.preventDefault();
			//Push back to display page
			props.history.push(`/game/create`);
		}
	return (
		<>
			<p>user: {props.user}</p>
			<p>userID: {props.userID}</p>
			<button onClick={handleClick}>Create New Character</button>
		</>
	);
}

export default CharacterList;
