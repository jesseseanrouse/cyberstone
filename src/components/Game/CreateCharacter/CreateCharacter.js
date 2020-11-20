// import react
import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function CreateCharacter(props) {
    const { url, path } = useRouteMatch();
    const handleSubmit = (event) => {
			// Prevent Form from Refreshing
			event.preventDefault();
			//Push back to display page
			props.history.push(`${path}/intro`);
		};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input className='LogInBut' type='submit' value='Create Character' />
			</form>
		</>
	);
}

export default CreateCharacter