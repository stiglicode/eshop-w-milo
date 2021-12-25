import React, { useState, useEffect } from "react";

import AuthLogin from "./page/auth";
import Dashboard from "./page/dashboard";
import ProtectedComponent from "./components/protected-component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { InitStore } from "./bin/store/init";

function App() {
	const [isLogged, setAuthentication] = useState(false);
	var loggedID = "";

	const checkAuthenticationStatus = data => {
		if (data[0] === true && data[1] === true) {
			return setAuthentication(true);
		} else {
			return setAuthentication(false);
		}
	};

	const checkAuthenticationID = data => {
		return (loggedID = data);
	};

	useEffect(() => {
		// console.log([Object]);
	});

	useEffect(() => {
		if (isLogged === true) {
			const ignite = new InitStore(loggedID);
			if (typeof Storage !== "undefined") {
				return window.sessionStorage.setItem(ignite.index, ignite.value);
			} else {
				throw Error("Sorry, your browser does not support Web Storage...");
			}
		}
	}, [isLogged]);

	useEffect(() => {
		console.log(window.sessionStorage);
	});

	return (
		<Router>
			<Switch>
				<Route path="/login">
					<AuthLogin
						authenticatedStatus={checkAuthenticationStatus}
						authenticatedID={checkAuthenticationID}
					/>
				</Route>
				<Route path="/" exact>
					<ProtectedComponent>
						<Dashboard />
					</ProtectedComponent>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
