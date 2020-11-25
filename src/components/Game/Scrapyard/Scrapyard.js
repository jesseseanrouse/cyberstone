// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Scrapyard(props) {
	React.useEffect(() => {
		if (props.data != false) {
			props.setName({name: props.data.name})
			props.setStat(props.data.stat)
			props.setInven(props.data.inven)
			props.setChar(props.data.char)
			props.setData(false);
		}
	}, [])
	return (
		<>
			<p>Scrapyard</p>
			<p>
				You stand in an open area near the front gate. You can see the Power
				Plant, Smelter, Compactor, and Factory from here.
			</p>
			<p>Actions</p>
			<Link to='/game/scrapyard/explore'>Explore</Link>
			<p>Travel</p>
			<Link to='/game/powerplant/lobby'>Power Plant</Link>
		</>
	);
}

export default Scrapyard;
