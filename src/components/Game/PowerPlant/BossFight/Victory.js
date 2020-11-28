// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Victory(props) {
	React.useEffect(() => {
		let powerPro = props.powerPro;
		props.setPowerPro({ ...powerPro, boss: 2 });
	}, []);
	return (
		<>
			{props.message}
			<Link to='/game/powerplant/generator'>Continue</Link>
		</>
	);
}

export default Victory;
