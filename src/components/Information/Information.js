// Import React
import React from 'react';
// import css
import './info.css';

function Information() {
	return (
		<div className='infoPage'>
			<h1>Information</h1>
			<h2>Overview</h2>
			<div>
				This is a choose-your-own-adventure game with a cyberpunk theme. This
				version of the game only has one boss but is beatable no matter how you
				build your character, it just might be easier or harder depending on
				your choices. There are currently no way to loose the game for being defeated in
				combat so don't worry too much.
			</div>
			<h2>Stats</h2>
			<h4>Strength</h4>
			<div>
				This is a measure of how strong your character is and certain choices
				are affected by this. Also, your strength quantity gives you a boost in
				health.
			</div>
			<h4>Endurance</h4>
			<div>
				This primarily effects how much health and energy your character starts
				with.
			</div>
			<h4>Intellect</h4>
			<div>
				This is how book smart your character is and some choices are affected
				by this stat.
			</div>
			<h4>Cunning</h4>
			<div>
				This is how clever your character is and some choices are affected by
				this.
			</div>
			<h4>Agility</h4>
			<div>
				This effects your character's ability to dodge incoming attacks in the
				boss fight and some choices are affected by this.
			</div>
			<h4>Perception</h4>
			<div>
				This is your character's ability to discern their world. Some options are affected by this.
			</div>
			<h4>Willpower</h4>
			<div>
				This is your character's tenacity and primarily gets a boost to your
				energy.
			</div>
			<h4>Health</h4>
			<div>
				This is the amount of damage your character can take before being
				defeated. In the game, this is referred to as hp (health points).
			</div>
			<h4>Energy</h4>
			<div>
				This is the amount of energy your character has. If this is depleted,
				your character will be defeated. In the game, this is referred to as ep (energy
				points).
			</div>
		</div>
	);
}

export default Information;
