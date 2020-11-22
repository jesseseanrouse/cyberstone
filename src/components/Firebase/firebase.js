// Had some help from a guide https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial
// moved away from previous guide to this https://www.youtube.com/watch?v=pI4438IHBYY
// basically copying what he did... Not good to copy but I want this to work and I am giving him credit here. Hopefully I won't forget to give him credit in my about page.
import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyBWpFhCL9y-2OV-aoOYj7JjtwKQepUz9Fg',
	authDomain: 'cyberstone-896cf.firebaseapp.com',
	databaseURL: 'https://cyberstone-896cf.firebaseio.com',
	projectId: 'cyberstone-896cf',
	storageBucket: 'cyberstone-896cf.appspot.com',
	messagingSenderId: '759191450596',
	appId: '1:759191450596:web:07f852a2ade916c5848df1',
	// measurementId: 'G-HRCC5CGPDV',
};

var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();

// <script src="/__/firebase/8.1.0/firebase-app.js"></script>
// <script src="/__/firebase/8.1.0/firebase-analytics.js"></script>
// <script src="/__/firebase/init.js"></script>
