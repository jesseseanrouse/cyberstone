// Import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// Import components
import CreateCharacter from './CreateCharacter/CreateCharacter';
import Intro from './Intro/App';

function App(props) {
	const { url, path } = useRouteMatch();
	// default variables
	// character info: core: 1: physical, 2: electric, 3: fire
	let baseChar = {
		name: '',
		core: 0,
		prof: '',
	};
	// strength, Endurance, Willpower, Intellect, Cunning, Perception, Agility
	let baseStats = {
		str: 4,
		end: 4,
		wil: 4,
		int: 4,
		cun: 4,
		per: 4,
		agi: 4,
	};
	// State lives here
	const [stat, setStat] = useState(baseStats);
	const [char, setChar] = useState(baseChar);
	const [err, setErr] = useState('')
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/create`}
					render={(routerProps) => (
						<>
							<CreateCharacter
								{...routerProps}
								stat={stat}
								setStat={setStat}
								char={char}
								setChar={setChar}
								setCharID={props.setCharID}
								userID={props.userID}
								list={props.list}
								err={err}
								setErr={setErr}
							/>
						</>
					)}
				/>
				<Route
					path={`${path}/intro`}
					render={(routerProps) => (
						<>
							<Intro
								{...routerProps}
								stat={stat}
								setStat={setStat}
								char={char}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
							/>
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
