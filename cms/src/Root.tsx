// import axios from "axios";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {bindActionCreators} from "redux";
import {RootState} from "./bin/data-types/state/type";
import {InitUserAuth} from "./bin/fetch/get-fetch";
import {GetLocalStorage} from "./bin/safe-localStorage";
import {actions} from "./bin/state";

// Styles
import "./styles/style.scss";

// Views
import Dashboard from "./views/dashboard";
import {FetchSecret} from "./bin/data-types/fetch/enum";

const Root = (): JSX.Element => {
	const dispatch = useDispatch();
	const {user_auth} = bindActionCreators(actions, dispatch);

	const userDetails = useSelector(
		(state: RootState) => state.userAuthentication
	);

	useEffect(() => {
		if (GetLocalStorage(FetchSecret.TOKEN)) {
			if (!userDetails.authentication) {
				const result = new InitUserAuth(user_auth).request();
				result;
			} else {
				return;
			}
		}
	}, []);

	return (
		<Router>
			<Switch>
				<Route path="/">
					<Dashboard/>
				</Route>
				{/*<Route path="/" exact>*/}
				{/*	{!userDetails.authentication ? (*/}
				{/*		<Redirect to="/login" />*/}
				{/*	) : (*/}
				{/*		<Dashboard />*/}
				{/*	)}*/}
				{/*</Route>*/}
				{/*<Route path="/login">*/}
				{/*	{!userDetails.authentication ? (*/}
				{/*		<Auth />*/}
				{/*	) : (*/}
				{/*		<Redirect to="/"/>*/}
				{/*	)}*/}
				{/*</Route>*/}
			</Switch>
		</Router>
	);
};

export default Root;
