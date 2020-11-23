// import react
import React from 'react';
// Import Firebase
import firebaseDb from '../Firebase/firebase';
// import component
import RenderList from './RenderList';

function CharacterList(props) {
	let charList = [];
	// Get list and display
	React.useEffect(() => {
		let ref = firebaseDb.once('value').then(function (snapshot) {
			let ref2 = snapshot
				.child(`users/${props.userID}/characters`)
				.forEach(function (snapshot) {
					let val = snapshot.val();
					charList.push(val);
				});
				props.setList(charList)
		});
	}, []);

	// map charlist and render
	const listRender = props.list.map((ele, index) => {
		return <RenderList name={ele.char.name} />;
	});

	// Create new character
	const handleClick = (event) => {
		// Prevent Form from Refreshing
		event.preventDefault();
		//Push back to display page
		props.history.push(`/game/create`);
	};
	return (
		<>
			{props.list === [] ? <p>Loading...</p> : <p>{listRender}</p>}
			<button onClick={handleClick}>Create New Character</button>
		</>
	);
}

export default CharacterList;
