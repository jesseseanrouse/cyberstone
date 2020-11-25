// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Lobby from './Lobby'
import Hallway from './Hallway'
import AirVent from './AirVent'
import Failed from './Failed'

function App(props) {
    const { url, path } = useRouteMatch();
    // state lives here
    const [message, setMessage] = useState('')
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
					path={`${path}/failed`}
					render={(routerProps) => (
						<>
							<Failed {...routerProps} message={message} />
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
