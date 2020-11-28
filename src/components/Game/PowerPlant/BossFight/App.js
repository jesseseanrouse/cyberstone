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
								stat={props.stat}
								setStat={props.setStat}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								message={setMessage}
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
								stat={props.stat}
								setStat={props.setStat}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								message={setMessage}
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
								stat={props.stat}
								setStat={props.setStat}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								message={setMessage}
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
								stat={props.stat}
								setStat={props.setStat}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								message={setMessage}
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
								stat={props.stat}
								setStat={props.setStat}
								eStat={props.eStat}
								setEStat={props.setEStat}
								powerPro={props.powerPro}
								name={props.name}
								message={message}
								message={setMessage}
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