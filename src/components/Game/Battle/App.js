// import react
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

function App() {
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
                                eName={eName}
                                eStat={eStat}
                                eAttSet={eAttSet}
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
