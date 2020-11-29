// import React
import React from 'react';
import { Link } from 'react-router-dom';

function Intro(props) {
	function bounty() {
		return (
			<p>
				You review the bounty sheet that you took. The locals are being attacked
				by robots that are being produced at this location. The bounty is for
				some egg head scientist that the locals don't even have a name for. But
				all they really want is for the attacks to stop and the money is good,
				so you are here.
			</p>
		);
	}
	function scavenger() {
		return (
			<p>
				You double check your map. This is the scrapyard from before the
				Cataclysm with all the high quality robots from some company called
				Telsa. This does not look like what you thought it did with more junk
				than quality. However you did hear on your way here that someone is
				building robots here and terrorizing the locals. There may be more to
				this place than meets the eye.
			</p>
		);
	}
	function farmer() {
		return (
			<p>
				So this is the place you think. This is where the robots that have been
				attacking your farm, your friends, and killing people without cause. You
				have had enough of these attacks and have tracked the robots here to put
				an end to this once and for all.
			</p>
		);
	}
	return (
		<div className='gameDisplay'>
			{props.char.prof === 'bounty' ? bounty() : null}
			{props.char.prof === 'scavenger' ? scavenger() : null}
			{props.char.prof === 'farmer' ? farmer() : null}
			<p>
				You take a look at the gate. Its not much to look at and it is locked.
				Too smooth and tall to climb over. How do you want to proceed?
			</p>
			<div className='gameList'>
				<Link to='/game/intro/1'>
					Bash your way through the gate (+1 Strength)
				</Link>
				<Link to='/game/intro/2'>Pick the lock (+1 Cunning)</Link>
				<Link to='/game/intro/3'>Look for another way in (+1 Perception)</Link>
			</div>
		</div>
	);
}

export default Intro;
