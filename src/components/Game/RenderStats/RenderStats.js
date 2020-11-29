// import React
import React from 'react';
// import css
import './RenderStats.css';
// Import Firebase
import firebaseDb from '../../Firebase/firebase';
// Font awesome for settings
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

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
	const handleClickBars = () => {
		let nav = document.getElementById('CharStatsMenu');
		if (nav.style.display === 'flex') {
			nav.style.display = 'none';
		} else {
			nav.style.display = 'flex';
		}
	};
	return (
		<div className='displayStats'>
			<div className='settingIcon' onClick={handleClickBars}>
				<FontAwesomeIcon className='appTitle' icon={faCog} />
			</div>
			<div id='CharStatsMenu'>
				<div className='statsText'>{props.name.name}</div>
				<div className='statsTextTitle'>Stats</div>
				<div className='statsText'>Strength: {props.stat.str}</div>
				<div className='statsText'>Endurance: {props.stat.end}</div>
				<div className='statsText'>Intellect: {props.stat.int}</div>
				<div className='statsText'>Cunning: {props.stat.cun}</div>
				<div className='statsText'>Agility: {props.stat.agi}</div>
				<div className='statsText'>Perception: {props.stat.per}</div>
				<div className='statsText'>Willpower: {props.stat.wil}</div>
				<div className='statsText'>
					Health: {props.stat.hp}/{props.stat.hpMax}
				</div>
				<div className='statsText'>
					Energy: {props.stat.ep}/{props.stat.epMax}
				</div>
				<div className='statsTextTitle'>Inventory</div>
				<div className='statsText'>Scrap Metal: {props.inven.scrp}</div>
				<div className='statsText'>
					Electrical Components: {props.inven.ecom}
				</div>
				<div className='statsText'>Battery: {props.inven.battery}</div>
				<button onClick={handelSave}>Save</button>
			</div>
		</div>
	);
}

export default RenderStats;
