// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Intro from './Intro'
import Landing from './Landing'
import Catwalk from './CatWalk'
import Console from './Console'
import Defeat from './Defeat'
import Victory from './Victory'

function App(props) {
	const { url, path } = useRouteMatch();
    // state lives here
    const [message, setMessage] = useState('')
    const [location, setLocation] = useState(1);
    const [onFire, setOnFire] = useState(0)
    const [jump, setJump] = useState(false)
    const [crackleState, setCrackleState] = useState(0)
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/intro`}
					render={(routerProps) => (
						<>
							<Intro
								{...routerProps}
								setEName={props.setEName}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								setLocation={setLocation}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/fight/1`}
					render={(routerProps) => (
						<>
							<Landing
								{...routerProps}
								char={props.char}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								inven={props.inven}
								setInven={props.setInven}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								setMessage={setMessage}
								onFire={onFire}
								crackleState={crackleState}
								setCrackleState={setCrackleState}
								location={location}
								setLocation={setLocation}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/fight/2`}
					render={(routerProps) => (
						<>
							<Catwalk
								{...routerProps}
								char={props.char}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								inven={props.inven}
								setInven={props.setInven}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								setMessage={setMessage}
								onFire={onFire}
								jump={jump}
								setJump={setJump}
								crackleState={crackleState}
								setCrackleState={setCrackleState}
								location={location}
								setLocation={setLocation}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/fight/3`}
					render={(routerProps) => (
						<>
							<Console
								{...routerProps}
								char={props.char}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								inven={props.inven}
								setInven={props.setInven}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								setMessage={setMessage}
								onFire={onFire}
								crackleState={crackleState}
								setCrackleState={setCrackleState}
								location={location}
								setLocation={setLocation}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/fight/victory`}
					render={(routerProps) => (
						<>
							<Victory
								{...routerProps}
								char={props.char}
								stat={props.stat}
								setStat={props.setStat}
								inven={props.inven}
								setInven={props.setInven}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
								name={props.name}
								message={message}
								setMessage={setMessage}
								onFire={onFire}
								crackleState={crackleState}
								setCrackleState={setCrackleState}
								location={location}
								setLocation={setLocation}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/fight/defeat`}
					render={(routerProps) => (
						<>
							<Defeat
								{...routerProps}
								char={props.char}
								stat={props.stat}
								setStat={props.setStat}
								inven={props.inven}
								setInven={props.setInven}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
								name={props.name}
								message={message}
								setMessage={setMessage}
								onFire={onFire}
								crackleState={crackleState}
								setCrackleState={setCrackleState}
								location={location}
								setLocation={setLocation}
							/>
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;