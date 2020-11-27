// import react
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import Fight
import Fight from './Fight'
import Defeat from './Defeat'
import Victory from './Victory'

function App(props) {
	const { url, path } = useRouteMatch();
	// state lives here
	const [message, setMessage] = React.useState('');
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/fight`}
					render={(routerProps) => (
						<>
							<Fight
								{...routerProps}
								name={props.name}
								eName={props.eName}
                                eStat={props.eStat}
                                setEStat={props.setEStat}
								eAttSet={props.eAttSet}
                                stat={props.stat}
                                setStat={props.setStat}
								inven={props.inven}
								setInven={props.setInven}
								message={message}
								setMessage={setMessage}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/defeat`}
					render={(routerProps) => (
						<>
							<Defeat {...routerProps} message={message} />
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/victory`}
					render={(routerProps) => (
						<>
							<Victory {...routerProps} message={message} />
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
