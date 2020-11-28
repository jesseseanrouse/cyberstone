// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import React Icons
import { GiFist } from 'react-icons/gi';
import { BsLightning } from 'react-icons/bs';
import { GiSmallFire } from 'react-icons/gi';
import { GiClawHammer } from 'react-icons/gi';
import { GiWinchesterRifle } from 'react-icons/gi';
import { GiPocketBow } from 'react-icons/gi';
import { GiWantedReward } from 'react-icons/gi';
import { GiSteampunkGoggles } from 'react-icons/gi';
import { GiFarmer } from 'react-icons/gi';

function CreateCharacter(props) {
	// for pathing
	const { url, path } = useRouteMatch();

	// Allows the data in the form to be changed
	const handleChange = (event) => {
		let data = props.name;
		props.setName({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		// Prevent Form from Refreshing
		event.preventDefault();
		// Check for unique name
		let testList = [];
		const testNames = props.list.map((ele, index) => {
			{
				testList.push(ele.name);
			}
		});
		let testName = props.name.name;
		if (testList.includes(testName)) {
			props.setErr('character name already exists');
		} else {
			// set values
			let form = props.stat;
			let core = 0
			let form2 = props.char;
			if (event.target.core.value === 'physical') {
				form = { ...form, str: form.str + 1 };
				core = 1
			} else if (event.target.core.value === 'electric') {
				form = { ...form, cun: form.cun + 1 };
				core =2
			} else if (event.target.core.value === 'fire') {
				form = { ...form, wil: form.wil + 1 };
				core = 3
			}
			let inven = props.inven
			if (event.target.weapon.value === 'Hammer') {
				form = {
					...form,
					str: form.str + 1,
					end: form.end + 1,
					wil: form.wil + 1,
				};
				props.setInven({...inven, weapon: 'Hammer'})
			} else if (event.target.weapon.value === 'Rifle') {
				form = {
					...form,
					int: form.int + 1,
					cun: form.cun + 1,
					per: form.per + 1,
				};
				props.setInven({ ...inven, weapon: 'Rifle' });
			} else if (event.target.weapon.value === 'Bow') {
				form = {
					...form,
					str: form.str + 1,
					agi: form.agi + 1,
					wil: form.wil + 1,
				};
				props.setInven({ ...inven, weapon: 'Bow' });
			}
			if (event.target.background.value === 'Bounty') {
				form2 = { ...props.char, prof: 'bounty', core: core };
				form = { ...form, per: form.per + 1 };
			} else if (event.target.background.value === 'Scavenger') {
				form2 = { ...props.char, prof: 'scavenger', core: core };
				form = { ...form, int: form.int + 1 };
			} else if (event.target.background.value === 'Farmer') {
				form2 = { ...props.char, prof: 'farmer', core: core };
				form = { ...form, end: form.end + 1 };
			}
			props.setStat(form);
			props.setChar(form2);
			//Push back to display page
			props.history.push(`/game/intro`);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<h3>Name your Character</h3>
				<input
					type='text'
					name='name'
					placeholder='name'
					onChange={handleChange}
				/>
				<h3>Select your Core</h3>
				<div>
					<input type='radio' id='core1' value='physical' name='core' checked />
					<GiFist size='50px' />
					<p>Physical Core:</p>
					<p>
						This core type focuses on defeating opponents through bashing them
						to pieces.
					</p>
					<p>Stat Bonus: +1 Strength</p>
				</div>
				<div>
					<input type='radio' id='core2' value='electric' name='core' />
					<BsLightning size='50px' />
					<p>Electric Core:</p>
					<p>
						This core type focuses on defeating opponents through disabling them
						rather than damaging them.
					</p>
					<p>Stat Bonus: +1 Cunning</p>
				</div>
				<div>
					<input type='radio' id='core3' value='fire' name='core' />
					<GiSmallFire size='50px' />
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
					<input type='radio' id='weapon2' value='Rifle' name='weapon' />
					<GiWinchesterRifle size='50px' />
					<p>name: Rifle</p>
					<p>type: Range</p>
					<p>primary stat: Intellect</p>
					<p>secondary stat: Cunning</p>
					<p>accuracy stat: Perception</p>
				</div>
				<div>
					<input type='radio' id='weapon3' value='Bow' name='weapon' />
					<GiPocketBow size='50px' />
					<p>name: War Bow</p>
					<p>type: Range</p>
					<p>primary stat: Strength</p>
					<p>secondary stat: Willpower</p>
					<p>accuracy stat: Agility</p>
				</div>
				<h3>Background</h3>
				<p>Affects some in game dialog</p>
				<div>
					<input
						type='radio'
						id='back1'
						value='Bounty'
						name='background'
						checked
					/>
					<GiWantedReward size='50px' />
					<p>Profession: Bounty Hunter</p>
					<p>You roam the region collecting bounties on individuals</p>
					<p>Bonus Stat: Perception</p>
				</div>
				<div>
					<input type='radio' id='back2' value='Scavenger' name='background' />
					<GiSteampunkGoggles size='50px' />
					<p>Profession: Scavenger</p>
					<p>You are always looking for opportunities to gather useful parts</p>
					<p>Bonus Stat: Intellect</p>
				</div>
				<div>
					<input type='radio' id='back3' value='Farmer' name='background' />
					<GiFarmer size='50px' />
					<p>Profession: Farmer</p>
					<p>You are just trying to get by in this crazy world</p>
					<p>Bonus Stat: Endurance</p>
				</div>
				<input className='LogInBut' type='submit' value='Create Character' />
				<p>{props.err}</p>
			</form>
		</>
	);
}

export default CreateCharacter;
