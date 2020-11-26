// import react
import React from 'react';
import { Link } from 'react-router-dom';

function StorageRoom(props) {
	React.useEffect(() => {
		props.setMessage('');
	}, []);
	function handleStorage() {
		let inven = props.inven;
		let scrp = props.inven.scrp + 4;
		let ecom = props.inven.ecom + 4;
		let battery = props.inven.battery + 4;
		props.setInven({ ...inven, scrp: scrp, ecom: ecom, battery: battery });
		props.setMessage(
			'You found some scrap metal, electrical components, and some batteries.'
		);
		let powerPro = props.powerPro;
		props.setPowerPro({ ...powerPro, storage: true });
	}
	return (
		<>
			<p>You are in a storage room</p>
			{props.message}
			{props.powerPro.storage ? null : (
				<>
					<p>Actions</p>
					<div onClick={handleStorage}>Search the room</div>
				</>
			)}
			<p>Travel</p>
			<Link to='/game/powerplant/hallway'>Hallway</Link>
			<Link to='/game/powerplant/airvent'>Climb into Air Vent</Link>
		</>
	);
}

export default StorageRoom;
