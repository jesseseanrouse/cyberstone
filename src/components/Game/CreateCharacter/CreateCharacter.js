// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import css
import './CreateChar.css';
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
	React.useEffect(() => {
		props.setStart(false)
	}, [])

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
			let core = 0;
			let form2 = props.char;
			if (event.target.core.value === 'physical') {
				form = { ...form, str: form.str + 1 };
				core = 1;
			} else if (event.target.core.value === 'electric') {
				form = { ...form, cun: form.cun + 1 };
				core = 2;
			} else if (event.target.core.value === 'fire') {
				form = { ...form, wil: form.wil + 1 };
				core = 3;
			}
			let inven = props.inven;
			if (event.target.weapon.value === 'Hammer') {
				form = {
					...form,
					str: form.str + 1,
					end: form.end + 1,
					wil: form.wil + 1,
				};
				props.setInven({ ...inven, weapon: 'Hammer' });
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
			<form className='createForm' onSubmit={handleSubmit}>
				<h3>Name your Character</h3>
				<input
					type='text'
					name='name'
					placeholder='name'
					className='inputName'
					onChange={handleChange}
				/>
				<h3>Select your Core</h3>
				<div className='createCore'>
					<div className='createIcon'>
						<input
							type='radio'
							id='core1'
							value='physical'
							name='core'
							className='radioCreate'
							checked
						/>
						<GiFist size='90px' />
					</div>
					<div className='createText'>Physical Core:</div>
					<div className='createText'>
						This core type focuses on defeating opponents through bashing them
						to pieces.
					</div>
					<div className='createText'>Stat Bonus: +1 Strength</div>
				</div>
				<div className='createCore'>
					<div className='createIcon'>
						<input
							type='radio'
							id='core2'
							value='electric'
							name='core'
							className='radioCreate'
						/>
						<BsLightning size='90px' />
					</div>
					<div className='createText'>Electric Core:</div>
					<div className='createText'>
						This core type focuses on defeating opponents through disabling them
						rather than damaging them.
					</div>
					<div className='createText'>Stat Bonus: +1 Cunning</div>
				</div>
				<div className='createCore'>
					<div className='createIcon'>
						<input
							type='radio'
							id='core3'
							value='fire'
							name='core'
							className='radioCreate'
						/>
						<GiSmallFire size='90px' />
					</div>
					<div className='createText'>Fire Core:</div>
					<div className='createText'>
						This core type focuses on defeating opponents through burning them
						over time.
					</div>
					<div className='createText'>Stat Bonus: +1 Willpower</div>
				</div>
				<h3>Select Starting Weapon</h3>
				<div className='createText'>
					You are given bonus stats for your weapon of choice
				</div>
				<div className='createWeapon'>
					<div className='createIconW'>
						<input
							type='radio'
							id='weapon1'
							value='Hammer'
							name='weapon'
							className='radioCreate'
							checked
						/>
						<GiClawHammer size='100px' />
					</div>
					<div className='createText'>name: War Hammer</div>
					<div className='createText'>type: Melee</div>
					<div className='createText'>primary stat: Strength</div>
					<div className='createText'>secondary stat: Endurance</div>
					<div className='createText'>accuracy stat: Willpower</div>
				</div>
				<div className='createWeapon'>
					<div className='createIconW'>
						<input
							type='radio'
							id='weapon2'
							value='Rifle'
							name='weapon'
							className='radioCreate'
						/>
						<GiWinchesterRifle size='100px' />
					</div>
					<div className='createText'>name: Rifle</div>
					<div className='createText'>type: Range</div>
					<div className='createText'>primary stat: Intellect</div>
					<div className='createText'>secondary stat: Cunning</div>
					<div className='createText'>accuracy stat: Perception</div>
				</div>
				<div className='createWeapon'>
					<div className='createIconW'>
						<input
							type='radio'
							id='weapon3'
							value='Bow'
							name='weapon'
							className='radioCreate'
						/>
						<GiPocketBow size='100px' />
					</div>
					<div className='createText'>name: War Bow</div>
					<div className='createText'>type: Range</div>
					<div className='createText'>primary stat: Strength</div>
					<div className='createText'>secondary stat: Willpower</div>
					<div className='createText'>accuracy stat: Agility</div>
				</div>
				<h3>Background</h3>
				<div className='createText'>Affects some in game dialog</div>
				<div className='createCore'>
					<div className='createIcon'>
						<input
							type='radio'
							id='back1'
							value='Bounty'
							name='background'
							className='radioCreate'
							checked
						/>
						<GiWantedReward size='100px' />
					</div>
					<div className='createText'>Profession: Bounty Hunter</div>
					<div className='createText'>
						You roam the region collecting bounties on individuals
					</div>
					<div className='createText'>Bonus Stat: Perception</div>
				</div>
				<div className='createCore'>
					<div className='createIcon'>
						<input
							type='radio'
							id='back2'
							value='Scavenger'
							name='background'
							className='radioCreate'
						/>
						<GiSteampunkGoggles size='100px' />
					</div>
					<div className='createText'>Profession: Scavenger</div>
					<div className='createText'>
						You are always looking for opportunities to gather useful parts
					</div>
					<div className='createText'>Bonus Stat: Intellect</div>
				</div>
				<div className='createCore'>
					<div className='createIcon'>
						<input
							type='radio'
							id='back3'
							value='Farmer'
							name='background'
							className='radioCreate'
						/>
						<GiFarmer size='100px' />
					</div>
					<div className='createText'>Profession: Farmer</div>
					<div className='createText'>
						You are just trying to get by in this crazy world
					</div>
					<div className='createText'>Bonus Stat: Endurance</div>
				</div>
				<input className='createBut' type='submit' value='Create Character' />
				<p>{props.err}</p>
			</form>
		</>
	);
}

export default CreateCharacter;
