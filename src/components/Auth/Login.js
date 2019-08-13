// React
import React, {useState} from 'react';
import Fire from "../../firebase/Firebase";

// Material
import TextField from '@material-ui/core/TextField';
import {Button} from '@material-ui/core';

// Local
import './Login.scss';


const Login = () => {

	const [values, setValues] = useState({
		email: '',
		password: ''
	})

	const handleChange = (name) => (e) => {
		setValues({...values, [name]: e.target.value});
	}

	const login = (e) => {
		e.preventDefault();
		Fire.auth().signInWithEmailAndPassword(values.email, values.password).then((u) => {
			alert("Successfully Logged In")
		}).catch((err) => {
			console.log("Error: " + err.toString());
		})
	}

	const signup = (e) => {
		e.preventDefault();
		Fire.auth().createUserWithEmailAndPassword(values.email, values.password).then((u) => {
			alert("Successfully Signed Up")
		}).catch((err) => {
			alert("There was an error")
			console.log("Error: " + err.toString());
		})
	}

	return (
		<div className="Login">
			<form className="Form" noValidate autoComplete="off">
				<TextField
				id="standard-textarea"
				label="Enter your email"
				placeholder="Email"
				margin="normal"
				onChange={handleChange('email')}
				/>
				<TextField
				id="standard-textarea"
				label="Enter your password"
				placeholder="Password"
				type="password"
				margin="normal"
				onChange={handleChange('password')}
				/>
				<Button onClick={login}>Login</Button>
				<Button onClick={signup}>Signup</Button>
			</form>
	 </div>
	)
}

export default Login;