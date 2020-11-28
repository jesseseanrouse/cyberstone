// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Lobby from './Lobby';
import Hallway from './Hallway';
import AirVent from './AirVent';
import Failed from './Failed';
import StorageRoom from './StorageRoom';
import BossFight from './BossFight/App'
import Generator from './Generator'

function App(props) {
	const { url, path } = useRouteMatch();
	// state lives here
	const [message, setMessage] = useState('');
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/lobby`}
					render={(routerProps) => (
						<>
							<Lobby
								{...routerProps}
								stat={props.stat}
								message={message}
								setMessage={setMessage}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/hallway`}
					render={(routerProps) => (
						<>
							<Hallway
								{...routerProps}
								stat={props.stat}
								setStat={props.setStat}
								message={message}
								setMessage={setMessage}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
								char={props.char}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/airvent`}
					render={(routerProps) => (
						<>
							<AirVent
								{...routerProps}
								char={props.char}
								stat={props.stat}
								setStat={props.setStat}
								message={message}
								setMessage={setMessage}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
								inven={props.inven}
								setInven={props.setInven}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/failed`}
					render={(routerProps) => (
						<>
							<Failed {...routerProps} message={message} />
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/storageroom`}
					render={(routerProps) => (
						<>
							<StorageRoom
								{...routerProps}
								message={message}
								setMessage={setMessage}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
								inven={props.inven}
								setInven={props.setInven}
							/>
						</>
					)}
				/>
				<Route
					path={`${path}/boss`}
					render={(routerProps) => (
						<>
							<BossFight
								{...routerProps}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								eName={props.eName}
								setEName={props.setEName}
								eStat={props.eStat}
								setEStat={props.setEStat}
								char={props.char}
								inven={props.inven}
								setInven={props.setInven}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/generator`}
					render={(routerProps) => (
						<>
							<Generator
								{...routerProps}
								message={message}
								setMessage={setMessage}
								powerPro={props.powerPro}
								setPowerPro={props.setPowerPro}
								inven={props.inven}
								setInven={props.setInven}
							/>
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
