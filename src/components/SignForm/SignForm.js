// Import React
import React from 'react';

function SignForm(props) {
	// set the form data to blank
	const [formData, setFormData] = React.useState({});

	// Allows the data in the form to be changed
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	// Handles the log in/sign up
	const handleSubmit = (event) => {
		// Prevent Form from Refreshing
		event.preventDefault();
		props.userIn(formData)
		//Push back to display page
		// props.history.push(`/characterList/`);
	};

	// Handles switching between forms
	const handleClick = (event) => {
		event.preventDefault();
		if (props.label2 === "Don't have an Account? Sign Up") {
			props.history.push(`/signup/`);
		} else {
			props.history.push(`/`);
		}
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>User:</div>
				<input
					type='text'
					name='user'
					value={formData.name}
					onChange={handleChange}
					placeholder='user'
				/>
				<div>Password:</div>
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					placeholder='Password'
				/>
				<input className='LogInBut' type='submit' value={props.label1} />
			</form>
			<button onClick={handleClick} >{props.label2}</button>
			<p>{props.err}</p>
		</>
	);
}

export default SignForm;
