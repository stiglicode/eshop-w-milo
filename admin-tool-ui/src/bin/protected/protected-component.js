import React, { useEffect, useState } from "react";
import { getLogs } from "../authentication/login.auth";

const ProtectedComponent = props => {
	const [logsData, setLogsData] = useState();

	const [isProtected, setProtection] = useState();

	useEffect(() => {
		getLogs(setLogsData);
	}, []);
	useEffect(() => {
		if (logsData) {
			if (window.localStorage.getItem("a-key") === logsData.auth_token) {
				return setProtection(true);
			} else {
				return setProtection(false);
			}
		} else {
			return;
		}
	}, [logsData]);

	return isProtected === true ? (
		<React.Fragment>{props.children}</React.Fragment>
	) : isProtected === false ? (
		(window.location.pathname = "/login")
	) : null;
};

export default ProtectedComponent;
