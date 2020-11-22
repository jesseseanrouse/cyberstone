// Import React
import React, {useState} from 'react';
import { Route, Switch } from 'react-router-dom';
// Import components
import About from '../About/About';
import Information from '../Information/Information';
import Nav from '../Nav/Nav';
import SignForm from '../SignForm/SignForm';
import CharacterList from '../characterList/CharacterList';
import Game from '../Game/App';
// Import Firebase
import firebaseDb from '../Firebase/firebase'

function App() {
	// state for user (user, user_id)
	const [user, setUser] = useState(['', '']);
	const [err, setError] = useState('')
	// CRUD functions for SignForm
	const addUser = (data) => {
		firebaseDb.child('users').push(data);
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
								err={err}
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
							<CharacterList {...routerProps} />
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
