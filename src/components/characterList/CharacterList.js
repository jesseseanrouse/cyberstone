// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import css
import './CharacterList.css';
// Import Firebase
import firebaseDb from '../Firebase/firebase';
// import component
import RenderList from './RenderList';

function CharacterList(props) {
	const { url, path } = useRouteMatch();
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
			props.setList(charList);
		});
	}, []);

	// handle load
	const handleLoad = (event) => {
		let testName = event.target.value;
		let key = '';
		let ref = firebaseDb
			.child(`users/${props.userID}/characters`)
			.orderByChild('name')
			.equalTo(testName)
			.once('value', (snapshot) => {
				snapshot.forEach(function (childSnapshot) {
					key = childSnapshot.key;
					props.setCharID(key);
				});
			});
		let ref2 = firebaseDb.once('value').then(function (snapshot) {
			let value = snapshot
				.child(`users/${props.userID}/characters/${key}`)
				.val();
			props.setData(value);
			props.history.push(`/game/scrapyard/`);
		});
	};

	// handle delete
	const handleDelete = (event) => {
		let testName = event.target.value;
		let ref = firebaseDb
			.child(`users/${props.userID}/characters`)
			.orderByChild('name')
			.equalTo(testName)
			.once('value', (snapshot) => {
				snapshot.forEach(function (childSnapshot) {
					let key = childSnapshot.key;
					props.setCharID(key);
					firebaseDb.child(`users/${props.userID}/characters/${key}`).remove();
				});
			});
		// to force re-render of child
		let ref2 = firebaseDb.once('value').then(function (snapshot) {
			let ref3 = snapshot
				.child(`users/${props.userID}/characters`)
				.forEach(function (snapshot) {
					let val = snapshot.val();
					charList.push(val);
				});
			props.setList(charList);
		});
	};

	// map charlist and render
	const listRender = props.list.map((ele, index) => {
		return (
			<RenderList
				name={ele.name}
				handleLoad={handleLoad}
				handleDelete={handleDelete}
			/>
		);
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
			{props.list === [] ? (
				<p>Loading...</p>
			) : (
				<>
					<div className='charList'>{listRender}</div>
				</>
			)}
			<button className='charBut' onClick={handleClick}>
				Create New Character
			</button>
		</>
	);
}

export default CharacterList;
