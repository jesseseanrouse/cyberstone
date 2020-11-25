// import react
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import Fight
import Fight from './Fight'

function App(props) {
    const { url, path } = useRouteMatch();
	return (
		<>
			<Switch>
                <p>fight</p>
				<Route
					exact
					path={`${path}/`}
					render={(routerProps) => (
						<>
							<Fight
								{...routerProps}
								name={props.name}
								eName={props.eName}
								eStat={props.eStat}
								eAttSet={props.eAttSet}
								stat={props.stat}
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
