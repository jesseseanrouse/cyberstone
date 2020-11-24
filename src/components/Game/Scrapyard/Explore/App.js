// import React
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Explore from './ExploreScrapyard';
import Result1 from './Result1'

function App(props) {
	const { url, path } = useRouteMatch();
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/`}
					render={(routerProps) => (
						<>
							<Explore {...routerProps} setCheck={props.setCheck} />
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/result/1`}
					render={(routerProps) => (
						<>
							<Result1
								{...routerProps}
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
