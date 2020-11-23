// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Scrapyard from './Scrapyard'

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
								<Scrapyard
									{...routerProps}
									name={props.name}
									stat={props.stat}
									setStat={props.setStat}
									char={props.char}
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

export default App