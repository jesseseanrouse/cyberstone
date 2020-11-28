// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Defeat(props) {
	React.useEffect(() => {
        let powerPro = props.powerPro
		props.setPowerPro({ ...powerPro, boss: 1 });
	}, []);
	return (
		<>
			{props.message}
			<Link to='/game/scrapyard/recover'>Continue</Link>
		</>
	);
}

export default Defeat;
