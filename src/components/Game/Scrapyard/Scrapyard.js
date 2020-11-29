// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Scrapyard(props) {
	React.useEffect(() => {
		if (props.data != false) {
			props.setName({ name: props.data.name });
			props.setStat(props.data.stat);
			props.setInven(props.data.inven);
			props.setChar(props.data.char);
			props.setData(false);
			props.setPowerPro(props.data.powerPro);
		}
		props.setMessage('');
		props.setStart(true);
		document.body.style.backgroundColor = 'transparent';
		// image is owned by Sonniss.com
		document.body.style.backgroundImage =
			"url('https://i.imgur.com/wUFcIow.jpg?1')";
	}, []);
	function handleRepair() {
		if (props.stat.hp >= props.stat.hpMax) {
			props.setMessage('You are already at full health');
		} else {
			let inven = props.inven;
			let scrp = props.inven.scrp - 1;
			props.setInven({ ...inven, scrp: scrp });
			let testHP = props.stat.hp + 50;
			let testHPMax = props.stat.hpMax;
			if (testHP > testHPMax) {
				let hp = props.stat.hpMax;
				let stat = props.stat;
				props.setStat({ ...stat, hp: hp });
			} else if (testHP < testHPMax) {
				let hp = props.stat.hp + 50;
				let stat = props.stat;
				props.setStat({ ...stat, hp: hp });
			}
			props.setMessage('You used a piece of scrap metal to repair yourself');
		}
	}
	function handleLack() {
		props.setMessage('You do not have any scrap metal');
	}
	return (
		<div className='gameDisplay'>
			<p>Scrapyard</p>
			<p>
				You stand in an open area near the front gate. You can see the Power
				Plant, Smelter, Compactor, and Factory from here.
			</p>
			{props.message}
			<p>Actions</p>
			<div className='gameList'>
				<Link to='/game/scrapyard/explore'>Explore</Link>
				{props.inven.scrp > 0 ? (
					<div onClick={handleRepair}>
						Repar yourself (+50 Hp, -1 Scrap Metal)
					</div>
				) : (
					<div onClick={handleLack}>
						Repar yourself (+50 Hp, -1 Scrap Metal)
					</div>
				)}
			</div>
			<p>Travel</p>
			<div className='gameList'>
				<Link to='/game/powerplant/lobby'>Power Plant</Link>
			</div>
		</div>
	);
}

export default Scrapyard;
