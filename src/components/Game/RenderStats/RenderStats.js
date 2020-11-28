// import React
import React from 'react';
// import css
import './RenderStats.css';
// Import Firebase
import firebaseDb from '../../Firebase/firebase';

function RenderStats(props) {
	function handelSave() {
		let { name } = props.name;
		let char = props.char;
		let stat = props.stat;
		let inven = props.inven;
		let powerPro = props.powerPro;
		let data = { name, char, stat, inven, powerPro };
		firebaseDb.child(`users/${props.userID}/characters/${props.charID}`).update(data);
	}
	return (
		<div className='CharStatsMenu'>
			<p>{props.name.name}</p>
			<p>Stats</p>
			<p>Strength: {props.stat.str}</p>
			<p>Endurance: {props.stat.end}</p>
			<p>Intellect: {props.stat.int}</p>
			<p>Cunning: {props.stat.cun}</p>
			<p>Agility: {props.stat.agi}</p>
			<p>Perception: {props.stat.per}</p>
			<p>Willpower: {props.stat.wil}</p>
			<p>
				Health: {props.stat.hp}/{props.stat.hpMax}
			</p>
			<p>
				Energy: {props.stat.ep}/{props.stat.epMax}
			</p>
			<p>Inventory</p>
			<p>Scrap Metal: {props.inven.scrp}</p>
			<p>Electrical Components: {props.inven.ecom}</p>
			<p>Battery: {props.inven.battery}</p>
			<button onClick={handelSave}>Save</button>
		</div>
	);
}

export default RenderStats;
