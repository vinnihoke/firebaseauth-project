import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase'

// Your web app's Firebase configuration
 var FirebaseConfig = {
	apiKey: "AIzaSyCpYC54eg3buefFZs4aT59YPL04Vtz__as",
	authDomain: "fbauth-project-2.firebaseapp.com",
	databaseURL: "https://fbauth-project-2.firebaseio.com",
	projectId: "fbauth-project-2",
	storageBucket: "fbauth-project-2.appspot.com",
	messagingSenderId: "788861207293",
	appId: "1:788861207293:web:5b206998bca33e2f"
 };
 // Initialize Firebase
 const Fire = firebase.initializeApp(FirebaseConfig);

 export default Fire;

