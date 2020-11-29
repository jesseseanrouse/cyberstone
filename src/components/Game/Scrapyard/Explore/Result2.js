// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Result2(props) {
	let pPer = props.stat.per;
	let ePer = props.eStat.per;
	let random = Math.floor(pPer * Math.random());
	let random2 = Math.floor(ePer * Math.random());
	if (random2 > random) {
		return (
			<div className='gameDisplay'>
				<p>You are attacked by a {props.eName}</p>
				<p>Actions</p>
				<div className='gameList'>
					<Link to='/game/battle/fight'>Fight</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className='gameDisplay'>
				<p>You notice a {props.eName}</p>
				<p>Actions</p>
				<div className='gameList'>
					<Link to='/game/battle/fight'>Attack it</Link>
					<Link to='/game/scrapyard'>Ignore it</Link>
				</div>
			</div>
		);
	}
}

export default Result2;
