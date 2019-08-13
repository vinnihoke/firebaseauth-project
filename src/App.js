// React
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Local
import './App.scss';
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Fire from './firebase/Firebase';





const App = () => {
const [user, setUser] = useState();

useEffect(() => authListener(), [])

const authListener = () => {
	Fire.auth().onAuthStateChanged((user) => {
		if (user) {
			setUser({user});
		} else {
			setUser();
		}
	})
}
  return (
	<div className="App">
		{!user ? (<Login/>) : (<Home/>)}
		{console.log(user)}
	</div>
  );
}

export default App;
