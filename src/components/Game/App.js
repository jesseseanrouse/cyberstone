// Import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// Import components
import CreateCharacter from './CreateCharacter/CreateCharacter';
import Intro from './Intro/Intro';

function App() {
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
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}`}
					render={(routerProps) => (
						<>
							<CreateCharacter
								{...routerProps}
								stat={stat}
								setStat={setStat}
								char={char}
								setChar={setChar}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/intro`}
					render={(routerProps) => (
						<>
							<Intro
								{...routerProps}
								stat={stat}
								setStat={setStat}
								char={char}
							/>
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
