// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Defeat(props) {
	React.useEffect(() => {
		let powerPro = props.powerPro;
		props.setPowerPro({ ...powerPro, boss: 1 });
	}, []);
	return (
		<div className='gameDisplay'>
			Dr. Crackles lashes out with a lightning bolt that strikes you right in the chest. As you lose consciousness you hear him call out, "Good Night!"
			<div className='gameList'>
				<Link to='/game/scrapyard/recover'>Continue</Link>
			</div>
		</div>
	);
}

export default Defeat;
