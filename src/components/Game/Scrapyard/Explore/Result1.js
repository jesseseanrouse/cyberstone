// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Result1(props) {
	if (props.check === false) {
		return (
			<div className='gameDisplay'>
				<p>You searched around but failed to find anything useful.</p>
				<div className='gameList'>
					<Link to='/game/scrapyard'>Continue</Link>
				</div>
			</div>
		);
	} else {
		if (props.newScrap === 1 && props.newECom === 1) {
			return (
				<div className='gameDisplay'>
					<p>
						You searched around and managed to find {props.newScrap} scrap metal
						and {props.newECom} electrical component.
					</p>
					<div className='gameList'>
						<Link to='/game/scrapyard'>Continue</Link>
					</div>
				</div>
			);
		} else if (props.newScrap === 1) {
			return (
				<div className='gameDisplay'>
					<p>
						You searched around and managed to find {props.newScrap} scrap metal
						and {props.newECom} electrical components.
					</p>
					<div className='gameList'>
						<Link to='/game/scrapyard'>Continue</Link>
					</div>
				</div>
			);
		} else if (props.newECom === 1) {
			return (
				<div className='gameDisplay'>
					<p>
						You searched around and managed to find {props.newScrap} scraps of
						metal and {props.newECom} electrical component.
					</p>
					<div className='gameList'>
						<Link to='/game/scrapyard'>Continue</Link>
					</div>
				</div>
			);
		} else {
			return (
				<div className='gameDisplay'>
					<p>
						You searched around and managed to find {props.newScrap} scraps of
						metal and {props.newECom} electrical components.
					</p>
					<div className='gameList'>
						<Link to='/game/scrapyard'>Continue</Link>
					</div>
				</div>
			);
		}
	}
}

export default Result1;
