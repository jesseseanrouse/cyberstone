// import react
import React from 'react';
import { Link } from 'react-router-dom';

function AirVent(props) {
	React.useEffect(() => {
		let message = '';
		if (props.locationStor === true) {
			if (props.powerPro.trap1 === true && props.powerPro.trap4 === false) {
				message =
					'You enter the air vent and notice the spinning blade. You give it a kick and it stops spinning.';
				let powerPro = props.powerPro;
				props.setPowerPro({ ...powerPro, trap4: true });
			}
		}
		props.setLocationStor(false);
		props.setMessage(message);
		// owned by https://www.reddit.com/r/Cyberpunk/comments/64jbp8/intricate_computer_wiring_tunnel_inside_an/
		document.body.style.backgroundImage =
			"url('https://i.imgur.com/9uKKeZu.jpg')";
	}, []);
	// Basic Display for top of screen
	function Display() {
		if (props.powerPro.trap4 === false) {
			return (
				<>
					<p>
						You are in the air vent. You see a fan blade spinning rapidly. It
						also seems to be very sharp.
					</p>
				</>
			);
		} else if (props.powerPro.trap5 === false) {
			return (
				<>
					<p>
						You are in the air vent. The vent continues up an incline. It seems
						to be greased up.
					</p>
				</>
			);
		} else {
			return (
				<>
					<p>You are in the air vent.</p>
				</>
			);
		}
	}
	// Handles first Trap
	function handleTrap1A() {
		if (props.stat.str < 5) {
			props.setMessage('You are not strong enough to break this');
		} else {
			props.setMessage(
				'You manage to kick the fan out of alignment and it spins out of control.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap4: true });
		}
	}
	function handleTrap1B() {
		if (props.inven.scrp === 0) {
			props.setMessage("You don't have any scrap metal to jam it");
		} else {
			if (props.stat.cun < 6) {
				props.setMessage('You are not cunning enough to do this');
			} else {
				props.setMessage(
					'You manage to jam the fan using a piece of scrap metal.'
				);
				let scrp = props.inven.scrp - 1;
				props.setInven({ ...props.inven, scrp: scrp });
				let powerPro = props.powerPro;
				props.setPowerPro({ ...powerPro, trap4: true });
			}
		}
	}
	function handleTrap1C() {
		let newHp = props.stat.hp - 75;
		let stat = props.stat;
		props.setStat({ ...stat, hp: newHp });
		let message =
			'You try to crawl through it but you get stuck in it. Good news is that the fan is now broken but bad news is that you took a lot of damage';
		if (newHp < 1) {
			message = message + ' You have taken too much damage and pass out.';
			props.setMessage(message);
			props.history.push(`/game/powerplant/failed`);
		}
		props.setMessage(message);
		let powerPro = props.powerPro;
		props.setPowerPro({ ...powerPro, trap4: true });
	}
	// handles second trap
	function handleTrap2A() {
		if (props.stat.agi < 6) {
			props.setMessage('You are not agile enough to climb through the grease');
		} else {
			props.setMessage(
				'You manage to climb up the vent using your reflexes to catch yourself when you slip.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap5: true });
		}
	}
	function handleTrap2B() {
		if (props.char.core === 3) {
			props.setMessage(
				'You use your core to ignite the grease so that you can climb up with ease.'
			);
			let powerPro = props.powerPro;
			props.setPowerPro({ ...powerPro, trap5: true });
		} else {
			if (props.inven.scrp < 2) {
				props.setMessage(
					'You need at least two pieces of scrap metal to try this'
				);
			} else {
				if (props.stat.cun < 6) {
					props.setMessage('You are not cunning enough to do this');
				} else {
					props.setMessage(
						'You create a spark using the two pieces of scrap metal and ignite the grease. You are then able to climb up with ease.'
					);
					let powerPro = props.powerPro;
					props.setPowerPro({ ...powerPro, trap5: true });
				}
			}
		}
	}
	function handleTrap2C() {
		if (props.inven.scrp < 2) {
			props.setMessage(
				'You need at least two pieces of scrap metal to try this'
			);
		} else {
			if (props.stat.str < 6) {
				props.setMessage('You are not strong enough to do this');
			} else {
				props.setMessage(
					'You are able to climb up the vent with a scrap metal in each hand can crawled up. You discard the metal when you are done.'
				);
				let scrp = props.inven.scrp - 2;
				props.setInven({ ...props.inven, scrp: scrp });
				let powerPro = props.powerPro;
				props.setPowerPro({ ...powerPro, trap5: true });
			}
		}
	}
	// First Trap
	function Trap1() {
		return (
			<div className='gameList'>
				<div onClick={handleTrap1A}>Try to break it</div>
				<div onClick={handleTrap1B}>Try to jam it up</div>
				<div onClick={handleTrap1C}>Try to crawl through it</div>
			</div>
		);
	}
	// Second Trap
	function Trap2() {
		return (
			<div className='gameList'>
				<div onClick={handleTrap2A}>Try to climb up</div>
				<div onClick={handleTrap2B}>Try to light it on fire</div>
				<div onClick={handleTrap2C}>Try to climb using scrap metal</div>
			</div>
		);
	}
	// actions for traps
	function Display2() {
		if (props.powerPro.trap4 === false) {
			return <div>{Trap1()}</div>;
		} else if (props.powerPro.trap5 === false) {
			return <div>{Trap2()}</div>;
		}
	}
	// access to generator
	function GenDisplay() {
		if (props.powerPro.boss < 2) {
			return <Link to='/game/powerplant/boss/intro'>Generator Room</Link>;
		} else {
			return <Link to='/game/powerplant/generator'>Generator Room</Link>;
		}
	}
	return (
		<div className='gameDisplay'>
			{Display()}
			{props.message}
			{props.powerPro.trap5 ? null : <p>Actions</p>}
			{Display2()}
			<p>Travel</p>
			<div className='gameList'>
				<Link to='/game/powerplant/lobby'>Return to Lobby</Link>
				{props.powerPro.trap4 ? (
					<Link to='/game/powerplant/storageroom'>Storage Room</Link>
				) : null}
				{props.powerPro.trap5 ? GenDisplay() : null}
			</div>
		</div>
	);
}

export default AirVent;
