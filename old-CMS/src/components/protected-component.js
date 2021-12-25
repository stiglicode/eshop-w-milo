import React, { useEffect, useState } from "react";
import { get } from "../bin/fetch";

const ProtectedComponent = props => {
	const [logsData, setLogsData] = useState();

	const [isProtected, setProtection] = useState();

	useEffect(async () => {
		return await get("auth/logs", setLogsData, true);
	}, []);
	useEffect(() => {
		if (logsData) {
			// console.log(logsData);
			if (window.localStorage.getItem("a-key") === logsData.auth_token) {
				return setProtection(true);
			} else {
				return setProtection(false);
			}
		} else {
			return;
		}
	}, [logsData]);

	const protectedRender = () => {
		// if (isProtected === false) {
		// 	return props.children;
		// } else if (isProtected === true) {
		// 	return <div>{"false"}</div>;
		// } else {
		// 	return <div>{"null"}</div>;
		// }
		return props.children;
	};
	return <React.Fragment>{protectedRender()}</React.Fragment>;
};

export default ProtectedComponent;
