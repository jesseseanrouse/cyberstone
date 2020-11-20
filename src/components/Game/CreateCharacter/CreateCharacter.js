// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
// import font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';

function CreateCharacter(props) {
	const { url, path } = useRouteMatch();
	const handleSubmit = (event) => {
		// Prevent Form from Refreshing
        event.preventDefault();
        // set values
        if (event.target.core.value === 'physical') {
            props.setStat({ ...props.stat, str: props.stat.str + 1 });
        } else if (event.target.core.value === 'electric') {
            props.setStat({ ...props.stat, cun: props.stat.cun + 1 });
        } else if (event.target.core.value === 'fire') {
            props.setStat({ ...props.stat, wil: props.stat.wil + 1 });
        }
		//Push back to display page
		props.history.push(`${path}/intro`);
    };
	return (
		<>
			<form onSubmit={handleSubmit}>
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
				<input className='LogInBut' type='submit' value='Create Character' />
			</form>
		</>
	);
}

export default CreateCharacter;
