import React from "react";

const ExitSession = () => {
	const handleLogOut = () => {
		window.localStorage.clear();
		return (window.location.pathname = "/login");
	};

	return (
		<button
			type="button"
			className="btn btn-outline-danger"
			onClick={handleLogOut}
		>
			Log out
		</button>
	);
};

export default ExitSession;
