// import react
import React from 'react';
import { Link } from 'react-router-dom';

function CharacterList(props) {
    const handleClick = (event) => {
			// Prevent Form from Refreshing
			event.preventDefault();
			//Push back to display page
			props.history.push(`/game/create`);
		}
	return (
		<>
			<button onClick={handleClick}>Create New Character</button>
		</>
	);
}

export default CharacterList;
