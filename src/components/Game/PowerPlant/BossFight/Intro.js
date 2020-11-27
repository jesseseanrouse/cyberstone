// import react
import React from 'react';
import { Link } from 'react-router-dom';

function Intro(props) {
	React.useEffect(() => {
		props.setLocation(1);
		let newStat = {
			str: 2,
			end: 4,
			wil: 6,
			int: 10,
			cun: 8,
			per: 6,
			agi: 1,
			hp: 130,
			hpMax: 130,
			ep: 170,
			epMax: 170,
		};
		props.setEName('Dr. Crackle');
		props.setEStat(newStat);
	}, []);
	// description as you enter room
	function DisplayDesc() {
		if (props.powerPro.boss === 0) {
			return (
				<p>
					You enter the generator room and are standing on a landing. You notice
					a catwalk stretching the length of the room. In the center of the room
					is a cyborg scientist working at a console.
				</p>
			);
		} else {
			return (
				<p>
					You return to the generator room. Dr. Crackle is working at his
					console once again.
				</p>
			);
		}
	}
	// Boss response to you entering room
	function DisplayTaunt() {
		if (props.powerPro.boss === 0) {
			return (
				<>
					<p>
						"Well come in intruder" says the cyborg without looking at you,
						"Give me a second to finish... Ah done!"
					</p>
					<p>
						"Let me take a look at you... I see... You're here to stop my master
						and kill me. Oh where are my manners I am Dr. Crackle and while it
						would be interesting to learn your name we should get started. Good
						luck! Mwah. Mwah Ha Ha HA HA!
					</p>
				</>
			);
		} else {
			return (
				<p>
					"Oh look it's {props.name.name}. What? Surprised I know your name? I
					hacked your brain while you were unconscious before I threw you out
					with the other scrap. Looks like Polina is not doing her job. Seems
					that I need to give her another chance at it! Ha Ha HA HA!""
				</p>
			);
		}
	}
	return (
		<>
			{DisplayDesc}
			{DisplayTaunt}
			<p>Action</p>
			<Link to='/game/powerplant/boss/fight/1'>Fight</Link>
		</>
	);
}

export default Intro;
