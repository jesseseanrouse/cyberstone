// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Explore from './ExploreScrapyard';
import Result1 from './Result1';

function App(props) {
	const { url, path } = useRouteMatch();
	// state lives here
	const [check, setCheck] = useState(false);
	const [newScrap, setNewScrap] = useState(0);
	const [newECom, setNewECom] = useState(0);
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/`}
					render={(routerProps) => (
						<>
							<Explore
								{...routerProps}
								setCheck={setCheck}
								check={check}
								newScrap={newScrap}
								setNewScrap={setNewScrap}
								newECom={newECom}
								setNewECom={setNewECom}
								stat={props.stat}
								inven={props.inven}
								setInven={props.setInven}
							/>
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
								newScrap={newScrap}
								newECom={newECom}
								check={check}
							/>
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
