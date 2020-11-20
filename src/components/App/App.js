// Import React
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Import components
import About from '../About/About';
import Information from '../Information/Information';
import Nav from '../Nav/Nav';
import SignForm from '../SignForm/SignForm';
import CharacterList from '../characterList/CharacterList';
import Game from '../Game/App';

function App() {
	// May or may not be temp
	const [user, setUser] = React.useState('');
	const [password, setPassword] = React.useState('');
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
