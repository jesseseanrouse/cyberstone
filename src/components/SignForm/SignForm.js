// Import React
import React from 'react';

function SignForm(props) {
	// set the form data to blank
	const [formData, setFormData] = React.useState([
		{ name: '' },
		{ password: '' },
	]);

	// Allows the data in the form to be changed
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
    // Handles the log in/sign up
    const handleSubmit = (event) => {
        // Prevent Form from Refreshing    
        event.preventDefault(); 
        //Push back to display page    
        props.history.push(`/characterList/`); 
		};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>Username:</div>
				<input
					type='text'
					name='name'
					value={formData.name}
					onChange={handleChange}
					placeholder='Username'
				/>
				<div>Password:</div>
				<input
					type='text'
					name='name'
					value={formData.password}
					onChange={handleChange}
					placeholder='Password'
				/>
				<input className='LogInBut' type='submit' value={props.label1} />
				<input className='ChangeLogBut' type='submit' value={props.label2} />
			</form>
		</>
	);
}

export default SignForm;
