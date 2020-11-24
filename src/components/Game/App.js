// Import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// Import components
import CreateCharacter from './CreateCharacter/CreateCharacter';
import Intro from './Intro/App';
import Scrapyard from './Scrapyard/App'
import RenderStats from './RenderStats/RenderStats';
import Battle from './Battle/App'

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
	};
	// scrap metal, electrical component
	let invenBase = {
		scrp: 0,
		ecom: 0,
	}
	// State lives here
	const [name, setName] = useState({name: ''})
	const [stat, setStat] = useState(baseStats);
	const [char, setChar] = useState(baseChar);
	const [inven, setInven] = useState(invenBase)
	const [err, setErr] = useState('')
	// for enemies
	const [eName, setEName] = useState('')
	const [eStat, setEStat] = useState(baseStats)
	const [eAttSet, setEAttSet] = useState(0)
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
								setStat={setStat}
								char={char}
								setChar={setChar}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
								inven={inven}
								setInven={setInven}
								data={props.data}
								setData={props.setData}
								eName={eName}
								setEName={setEName}
								eStat={eStat}
								setEStat={setEStat}
								setEAttSet={setEAttSet}
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
								stat={stat}
								char={char}
								inven={inven}
								setInven={setInven}
								eName={eName}
								eStat={eStat}
								eAttSet={eAttSet}
							/>
						</>
					)}
				/>
			</Switch>
			<RenderStats name={name} stat={stat} char={char} inven={inven} />
		</>
	);
}

export default App;
