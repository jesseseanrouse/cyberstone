// Import React
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import intro
import Intro from './Intro';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';

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
							<Intro
								{...routerProps}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								char={props.char}
								setChar={props.setChar}
								userID={props.userID}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/1`}
					render={(routerProps) => (
						<>
							<Intro1
								{...routerProps}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								char={props.char}
								setChar={props.setChar}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/2`}
					render={(routerProps) => (
						<>
							<Intro2
								{...routerProps}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								char={props.char}
								setChar={props.setChar}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
							/>
						</>
					)}
				/>
				<Route
					exact
					path={`${path}/3`}
					render={(routerProps) => (
						<>
							<Intro3
								{...routerProps}
								name={props.name}
								stat={props.stat}
								setStat={props.setStat}
								char={props.char}
								setChar={props.setChar}
								userID={props.userID}
								charID={props.charID}
								setCharID={props.setCharID}
							/>
						</>
					)}
				/>
			</Switch>
		</>
	);
}

export default App;
