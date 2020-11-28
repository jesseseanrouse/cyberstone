// Import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// Import components
import CreateCharacter from './CreateCharacter/CreateCharacter';
import Intro from './Intro/App';
import Scrapyard from './Scrapyard/App';
import RenderStats from './RenderStats/RenderStats';
import Battle from './Battle/App';
import PowerPlant from './PowerPlant/App';

function App(props) {
	const { url, path } = useRouteMatch();
	// default variables
	// character info: core: 1: physical, 2: electric, 3: fire
	let baseChar = {
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
		hp: 0,
		hpMax: 0,
		ep: 0,
		epMax: 0,
	};
	// scrap metal, electrical component
	let invenBase = {
		scrp: 0,
		ecom: 0,
		battery: 0,
		weapon: '',
	};
	// power plant progress
	let PowerProBase = {
		door: false,
		trap1: false,
		trap2: false,
		trap3: false,
		trap4: false,
		trap5: false,
		trap6: false,
		storage: false,
		boss: 0,
	};
	// State lives here
	const [name, setName] = useState({ name: '' });
	const [stat, setStat] = useState(baseStats);
	const [char, setChar] = useState(baseChar);
	const [inven, setInven] = useState(invenBase);
	const [powerPro, setPowerPro] = useState(PowerProBase);
	const [err, setErr] = useState('');
	const [message, setMessage] = useState('')
	// for enemies
	const [eName, setEName] = useState('');
	const [eStat, setEStat] = useState(baseStats);
	const [eAttSet, setEAttSet] = useState(0);

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
								name={name}
								setName={setName}
								inven={inven}
								setInven={setInven}
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
								name={name}
								stat={stat}
								setStat={setStat}
								char={char}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
								inven={inven}
								powerPro={powerPro}
							/>
						</>
					)}
				/>
				<Route
					path={`${path}/scrapyard`}
					render={(routerProps) => (
						<>
							<Scrapyard
								{...routerProps}
								name={name}
								setName={setName}
								stat={stat}
								eStat={eStat}
								setStat={setStat}
								char={char}
								setChar={setChar}
								message={message}
								setMessage={setMessage}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
								inven={inven}
								setInven={setInven}
								data={props.data}
								setData={props.setData}
								eName={eName}
								setEName={setEName}
								setEStat={setEStat}
								setEAttSet={setEAttSet}
								setPowerPro={setPowerPro}
							/>
						</>
					)}
				/>
				<Route
					path={`${path}/battle`}
					render={(routerProps) => (
						<>
							<Battle
								{...routerProps}
								name={name}
								stat={stat}
								setStat={setStat}
								char={char}
								inven={inven}
								setInven={setInven}
								eName={eName}
								eStat={eStat}
								setEStat={setEStat}
								eAttSet={eAttSet}
							/>
						</>
					)}
				/>
				<Route
					path={`${path}/powerplant`}
					render={(routerProps) => (
						<>
							<PowerPlant
								{...routerProps}
								name={name}
								stat={stat}
								eStat={eStat}
								setStat={setStat}
								char={char}
								inven={inven}
								setInven={setInven}
								eName={eName}
								setEName={setEName}
								setEStat={setEStat}
								powerPro={powerPro}
								setPowerPro={setPowerPro}
							/>
						</>
					)}
				/>
			</Switch>
			<RenderStats
				name={name}
				stat={stat}
				char={char}
				inven={inven}
				userID={props.userID}
				charID={props.charID}
				powerPro={powerPro}
			/>
		</>
	);
}

export default App;
