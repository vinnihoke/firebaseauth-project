// React
import React from 'react';
import {Route} from 'react-router-dom';

// Material
import {Button} from '@material-ui/core';

// Firebase
import Fire from "../../firebase/Firebase";

// Local
import './Home.scss'



const Home = () => {

	const logout = () => {
		Fire.auth().signOut();
		alert("Logged out")
	}

	return(
		<div className="Home">
			<h1>Welcome Home</h1>
			<Button onClick={logout}>Logout</Button>
		</div>
	)
}

export default Home