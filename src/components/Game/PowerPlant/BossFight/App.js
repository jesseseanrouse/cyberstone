// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Intro from './Intro'

function App(props) {
	const { url, path } = useRouteMatch();
    // state lives here
    const [message, setMessage] = useState('')
    const [location, setLocation] = useState(1);
    const [onFire, setOnFire] = useState(false)
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
			</Switch>
		</>
	);
}

export default App;