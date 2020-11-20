// import react
import React from 'react';

function CharacterList(props) {
    const handleClick = (event) => {
			// Prevent Form from Refreshing
			event.preventDefault();
			//Push back to display page
			props.history.push(`/game/`);
		}
	return (
		<>
			<button onClick={handleClick}>Create New Character</button>
		</>
	);
}

export default CharacterList;
