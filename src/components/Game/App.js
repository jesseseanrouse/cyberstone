// Import React
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// Import components
import CreateCharacter from './CreateCharacter/CreateCharacter';

function App() {
    const { url, path} = useRouteMatch()
	return (
		<>
			<p>Testing</p>
			<Switch>
				<Route
					exact
					path={`${path}/`}
					render={(routerProps) => (
						<>
							<CreateCharacter {...routerProps} />
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
