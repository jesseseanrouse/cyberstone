// import React
import React from 'react';

function RenderStats(props) {
	return (
		<>
			<p>{props.name.name}</p>
			<p>Stats</p>
			<p>Strength: {props.stat.str}</p>
			<p>Endurance: {props.stat.end}</p>
			<p>Intellect: {props.stat.int}</p>
			<p>Cunning: {props.stat.cun}</p>
			<p>Agility: {props.stat.agi}</p>
			<p>Perception: {props.stat.per}</p>
			<p>Willpower: {props.stat.wil}</p>
		</>
	);
}

export default RenderStats;
