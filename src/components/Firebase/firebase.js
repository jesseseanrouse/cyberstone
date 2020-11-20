// Had some help from a guide https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
import app from 'firebase/app';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBWpFhCL9y-2OV-aoOYj7JjtwKQepUz9Fg',
	authDomain: 'cyberstone-896cf.firebaseapp.com',
	databaseURL: 'https://cyberstone-896cf.firebaseio.com',
	projectId: 'cyberstone-896cf',
	storageBucket: 'cyberstone-896cf.appspot.com',
	messagingSenderId: '759191450596',
	appId: '1:759191450596:web:07f852a2ade916c5848df1',
	measurementId: 'G-HRCC5CGPDV',
};

class Firebase {
	constructor() {
		app.initializeApp(config);
	}
	// Firebase API for auth with email/password
	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password);

	doSignInWithEmailAndPassword = (email, password) =>
		this.auth.signInWithEmailAndPassword(email, password);
	doSignOut = () => this.auth.signOut();
	doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

	doPasswordUpdate = (password) =>
		this.auth.currentUser.updatePassword(password);
}

export default Firebase;