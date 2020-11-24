// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Result1(props) {
	if (props.check === false) {
		return (
			<>
				<p>You searched around but failed to find anything useful.</p>
				<Link to='/game/scrapyard'>Continue</Link>
			</>
		);
	} else {
		if (props.newScrap === 1 && props.newECom === 1) {
			return (
				<>
					<p>
						You searched around and managed to find {props.newScrap} scrap metal
						and {props.newECom} electrical component.
					</p>
					<Link to='/game/scrapyard'>Continue</Link>
				</>
			);
		} else if (props.newScrap === 1) {
			return (
				<>
					<p>
						You searched around and managed to find {props.newScrap} scrap metal
						and {props.newECom} electrical components.
					</p>
					<Link to='/game/scrapyard'>Continue</Link>
				</>
			);
		} else if (props.newECom === 1) {
			return (
				<>
					<p>
						You searched around and managed to find {props.newScrap} scraps of
						metal and {props.newECom} electrical component.
					</p>
					<Link to='/game/scrapyard'>Continue</Link>
				</>
			);
		} else {
			return (
				<>
					<p>
						You searched around and managed to find {props.newScrap} scraps of
						metal and {props.newECom} electrical components.
					</p>
					<Link to='/game/scrapyard'>Continue</Link>
				</>
			);
		}
	}
}

export default Result1;
