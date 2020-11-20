// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';
// import React Icons
import { GiClawHammer } from 'react-icons/gi';
import { GiWinchesterRifle } from 'react-icons/gi';
import { GiPocketBow } from 'react-icons/gi';

function CreateCharacter(props) {
	// for pathing
	const { url, path } = useRouteMatch();
    // functions for set up
	const setCore = (target) => {
		if (target.core.value === 'physical') {
            props.setStat({ ...props.stat, str: props.stat.str + 1 });
			props.setChar({
				...props.char,
				name: target.name.value,
				core: 1,
			});
		} else if (target.core.value === 'electric') {
			props.setStat({ ...props.stat, cun: props.stat.cun + 1 });
			props.setChar({
				...props.char,
				name: target.name.value,
				core: 2,
			});
		} else if (target.core.value === 'fire') {
			props.setStat({ ...props.stat, wil: props.stat.wil + 1 });
			props.setChar({
				...props.char,
				name: target.name.value,
				core: 3,
			});
        }
	};
	const setWeapon = (target) => {
		if (target.weapon.value === 'Hammer') {
			props.setStat({
				...props.stat,
				str: props.stat.str + 1,
				end: props.stat.end + 1,
				wil: props.stat.wil + 1,
			});
		} else if (target.weapon.value === 'Rifle') {
			props.setStat({
				...props.stat,
				int: props.stat.int + 1,
				cun: props.stat.cun + 1,
				per: props.stat.per + 1,
			});
		} else if (target.weapon.value === 'Bow') {
			props.setStat({
				...props.stat,
				str: props.stat.str + 1,
				agi: props.stat.agi + 1,
				wil: props.stat.wil + 1,
			});
        }
	};

	const handleSubmit = (event) => {
		// Prevent Form from Refreshing
		event.preventDefault();
        // set values
		setCore(event.target);
        setWeapon(event.target);
		//Push back to display page
		props.history.push(`${path}/intro`);
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>Name your Character</h3>
				<input type='text' name='name' placeholder='name' />
				<h3>Select your Core</h3>
				<div>
					<input type='radio' id='core1' value='physical' name='core' checked />
					<FontAwesomeIcon icon={faFistRaised} size='3x' />
					<p>Physical Core:</p>
					<p>
						This core type focuses on defeating opponents through bashing them
						to pieces.
					</p>
					<p>Stat Bonus: +1 Strength</p>
				</div>
				<div>
					<input type='radio' id='core2' value='electric' name='core' />
					<FontAwesomeIcon icon={faBolt} size='3x' />
					<p>Electric Core:</p>
					<p>
						This core type focuses on defeating opponents through disabling them
						rather than damaging them.
					</p>
					<p>Stat Bonus: +1 Cunning</p>
				</div>
				<div>
					<input type='radio' id='core3' value='fire' name='core' />
					<FontAwesomeIcon icon={faFire} size='3x' />
					<p>Fire Core:</p>
					<p>
						This core type focuses on defeating opponents through burning them
						over time.
					</p>
					<p>Stat Bonus: +1 Willpower</p>
				</div>
				<h3>Select Starting Weapon</h3>
				<p>You are given bonus stats for your weapon of choice</p>
				<div>
					<input
						type='radio'
						id='weapon1'
						value='Hammer'
						name='weapon'
						checked
					/>
					<GiClawHammer size='50px' />
					<p>name: War Hammer</p>
					<p>type: Melee</p>
					<p>primary stat: Strength</p>
					<p>secondary stat: Endurance</p>
					<p>accuracy stat: Willpower</p>
				</div>
				<div>
					<input type='radio' id='weapon2' value='Rifle' name='weapon' />{' '}
					<GiWinchesterRifle size='50px' />
					<p>name: Rifle</p>
					<p>type: Range</p>
					<p>primary stat: Intellect</p>
					<p>secondary stat: Cunning</p>
					<p>accuracy stat: Perception</p>
				</div>
				<div>
					<input type='radio' id='weapon3' value='Bow' name='weapon' />{' '}
					<GiPocketBow size='50px' />
					<p>name: War Bow</p>
					<p>type: Range</p>
					<p>primary stat: Strength</p>
					<p>secondary stat: Willpower</p>
					<p>Agility</p>
				</div>
				<input className='LogInBut' type='submit' value='Create Character' />
			</form>
		</>
	);
}

export default CreateCharacter;
