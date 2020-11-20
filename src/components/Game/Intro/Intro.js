// import React
import React from 'react';

function Intro(props) {
	return (
		<>
			<p>test</p>
			<p>{props.char.name}</p>
			<p>{props.char.core}</p>
			<p>str: {props.stat.str}</p>
			<p>end: {props.stat.end}</p>
			<p>wil: {props.stat.wil}</p>
			<p>int: {props.stat.int}</p>
			<p>cun: {props.stat.cun}</p>
			<p>per: {props.stat.per}</p>
			<p>agi: {props.stat.agi}</p>
		</>
	);
}

export default Intro;
