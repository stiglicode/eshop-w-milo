import React from "react";

import AuthLogin from "./page/auth";
import Dashboard from "./page/dashboard";
import ProtectedComponent from "./bin/protected/protected-component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/login">
					<AuthLogin />
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
