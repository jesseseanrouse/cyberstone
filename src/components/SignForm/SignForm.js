// Import React
import React from 'react';
// import css
import './SignForm.css'

function SignForm(props) {
	// set check to prevent auto move
	const [pagePush, setPagePush] = React.useState(false)
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
	};

	// if log-in/sign-in is successful
	React.useEffect(() => {
		if (pagePush === false) {
			setPagePush(true)
		} else {
			props.history.push(`/characterList/`);
			props.setErrCheck(false)
		}
	}, [props.errCheck])

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
			<form className='signForm' onSubmit={handleSubmit}>
				<div className='signTitle'>User:</div>
				<input
					type='text'
					name='user'
					value={formData.name}
					onChange={handleChange}
					placeholder='user'
				/>
				<div className='signTitle'>Password:</div>
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					placeholder='Password'
				/>
				<input className='LogInBut' type='submit' value={props.label1} />
			</form>
			<button className="signBut" onClick={handleClick}>{props.label2}</button>
			<p>{props.err}</p>
		</>
	);
}

export default SignForm;
