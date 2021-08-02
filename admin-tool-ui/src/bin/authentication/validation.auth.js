const userValidtion = (inputObject, loggin, setState) => {
	const dbName = loggin && loggin.name;
	const dbPassword = loggin && loggin.password;

	const statusContainer = [false, false];

	if (dbName === inputObject.name) {
		statusContainer[0] = true;
	}
	if (dbPassword === inputObject.pass) {
		statusContainer[1] = true;
	}
	if (statusContainer[0] && statusContainer[1]) {
		return {
			ok: true,
		};
	} else {
		return setState(statusContainer);
	}
};
export default userValidtion;
