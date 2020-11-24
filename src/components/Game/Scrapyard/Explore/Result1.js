// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Result1(props) {
	let check = false;
	let newScrap = 0;
    let newECom = 0;
	React.useEffect(() => {
        let per = props.stats.per;
		let random = Math.floor(per * Math.random() + 1);
		if (random < 3) {
			check = false;
		} else if (random < 6) {
			newScrap = Math.floor(2 * Math.random() + 1);
			newECom = Math.floor(2 * Math.random());
			check = true;
		} else if (random < 8) {
			newScrap = Math.floor(3 * Math.random() + 2);
			newECom = Math.floor(3 * Math.random());
			check = true;
		} else {
			newScrap = Math.floor(4 * Math.random() + 3);
			newECom = Math.floor(4 * Math.random());
			check = true;
		}
		if (check === true) {
			if (newScrap === 0 && newECom === 0) {
				newScrap = 1;
			}
        }
        let inven = props.inven
        inven = {...inven, scrp: props.inven.scrp + newScrap, ecom: props.inven.ecom + newECom}
        props.setInven(inven)
	}, []);
	function Render() {
		if (check === false) {
			return <p>You searched around but failed to find anything useful.</p>;
		} else {
			if (newScrap === 1 && newECom === 1) {
				return (
					<p>
						You searched around and managed to find {newScrap} scrap metal and{' '}
						{newECom} electrical component.
					</p>
				);
			} else if (newScrap === 1) {
				return (
					<p>
						You searched around and managed to find {newScrap} scrap metal and
						{newECom} electrical components.
					</p>
				);
			} else if (newECom === 1) {
				return (
					<p>
						You searched around and managed to find {newScrap} scraps of metal
						and {newECom} electrical component.
					</p>
				);
			} else {
				return (
					<p>
						You searched around and managed to find {newScrap} scraps of metal
						and {newECom} electrical components.
					</p>
				);
			}
		}
	}
	return (
		<>
			{Render()}
			<Link to='/game/scrapyard'>Continue</Link>
		</>
	);
}

export default Result1;
