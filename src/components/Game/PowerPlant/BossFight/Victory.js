// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Victory(props) {
	React.useEffect(() => {
		let powerPro = props.powerPro;
		props.setPowerPro({ ...powerPro, boss: 2 });
	}, []);
	return (
		<div className='gameDisplay'>
			{props.message}
			<div className='gameList'>
				<Link to='/game/powerplant/generator'>Continue</Link>
			</div>
		</div>
	);
}

export default Victory;
