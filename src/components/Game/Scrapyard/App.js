// import React
import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
// import components
import Scrapyard from './Scrapyard'
import Explore from './Explore/App'

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
									inven={props.inven}
									setInven={props.setInven}
								/>
							</>
						)}
					/>
					<Route
						path={`${path}/explore`}
						render={(routerProps) => (
							<>
								<Explore
									{...routerProps}
									name={props.name}
									stat={props.stat}
									setStat={props.setStat}
									char={props.char}
									userID={props.userID}
									charID={props.charID}
									setCharID={props.setCharID}
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

export default App