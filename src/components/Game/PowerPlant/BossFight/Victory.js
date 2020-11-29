// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Victory(props) {
	React.useEffect(() => {
		let powerPro = props.powerPro;
		props.setPowerPro({
			...powerPro,
			trap1: true,
			trap2: true,
			trap3: true,
			trap4: true,
			trap5: true,
			trap6: true,
			door: true,
			boss: 2,
		});
	}, []);
	return (
		<div className='gameDisplay'>
			You deal the final blow to Dr. Crackle and he falls to his knees. You cautiously approach him with your weapon ready. He laughs, "You won't win. I may die but he'll just find another to replace me. How do you think I got here? Ha HA HA HA..." He falls over dead with a grin on his face.
			<div className='gameList'>
				<Link to='/game/powerplant/generator'>Continue</Link>
			</div>
		</div>
	);
}

export default Victory;
