// Import React
import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
// Import components
import About from '../About/About';
import Information from '../Information/Information';
import Nav from '../Nav/Nav';
import SignForm from '../SignForm/SignForm';
import CharacterList from '../characterList/CharacterList';
import Game from '../Game/App';
// Import Firebase
import firebase from 'firebase';
import firebaseDb from '../Firebase/firebase';

function App() {
	// state lives here
	const [user, setUser] = useState('');
	const [userID, setUserID] = useState('');
	const [err, setErr] = useState('');
	const [errCheck, setErrCheck] = useState(false)
	// CRUD functions for SignForm
	// add user
	const addUser = (data) => {
		let testUser = data.user;
		let ref = firebaseDb;
		ref
			.child('users')
			.orderByChild('user')
			.equalTo(testUser)
			.once('value', (snapshot) => {
				if (snapshot.exists()) {
					setErr('user already exists');
				} else {
					firebaseDb.child('users').push(data);
					setErrCheck(true);
				}
			});
	};
	// log in user
	const logUser = (data) => {
		let testUser = data.user;
		let testPass = data.password;
		let ref = firebaseDb;
		ref
			.child('users')
			.orderByChild('user')
			.equalTo(testUser)
			.once('value', (snapshot) => {
				console.log(snapshot.val())
				if (snapshot.exists()) {
					setErr('works')
					setErrCheck(true);
				} else {
					setErr('user and password do not match');
				}
			});
	};
	return (
		<div className='App'>
			{/* <Router> */}
			<Switch>
				<Route
					exact
					path='/'
					render={(routerProps) => (
						<>
							<Nav />
							<SignForm
								{...routerProps}
								label1='Log In'
								label2="Don't have an Account? Sign Up"
								userIn={logUser}
								err={err}
								errCheck={errCheck}
								setErrCheck={setErrCheck}
							/>
						</>
					)}
				/>
				<Route
					exact
					path='/signup'
					render={(routerProps) => (
						<>
							<Nav />
							<SignForm
								{...routerProps}
								label1='Sign Up'
								label2='Already have an Account? Log In'
								userIn={addUser}
								err={err}
								errCheck={errCheck}
								setErrCheck={setErrCheck}
							/>
						</>
					)}
				/>
				<Route
					exact
					path='/info'
					render={(routerProps) => (
						<>
							<Nav />
							<Information {...routerProps} />
						</>
					)}
				/>
				<Route
					exact
					path='/about'
					render={(routerProps) => (
						<>
							<Nav />
							<About {...routerProps} />
						</>
					)}
				/>
				<Route
					exact
					path='/characterList'
					render={(routerProps) => (
						<>
							<CharacterList {...routerProps} user={user} userID={userID} />
						</>
					)}
				/>
				<Route
					path='/game'
					render={(routerProps) => (
						<>
							<Game {...routerProps} />
						</>
					)}
				/>
			</Switch>
			{/* </Router> */}
		</div>
	);
}

export default App;
