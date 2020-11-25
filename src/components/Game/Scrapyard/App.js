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
									setName={props.setName}
									stat={props.stat}
									setStat={props.setStat}
									char={props.char}
									setChar={props.setChar}
									userID={props.userID}
									charID={props.charID}
									setCharID={props.setCharID}
									inven={props.inven}
									setInven={props.setInven}
									data={props.data}
									setData={props.setData}
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
									eName={props.eName}
									eStat={props.eStat}
									setEName={props.setEName}
									setEStat={props.setEStat}
									setEAttSet={props.setEAttSet}
								/>
							</>
						)}
					/>
				</Switch>
			</>
		);
}

export default App