// import React
import React from 'react';
// import css
import './RenderStats.css';

function RenderStats(props) {
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
		</div>
	);
}

export default RenderStats;
