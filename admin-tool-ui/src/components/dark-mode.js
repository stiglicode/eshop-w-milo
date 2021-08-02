import React from "react";

const DarkModeSwitcher = props => {
	const clickHandle = e => {
		return props.check(e.currentTarget.checked);
	};
	return (
		<div className="form-check form-switch h-100 d-flex flex-row align-items-center">
			<input
				className="form-check-input"
				type="checkbox"
				id="flexSwitchCheckDefault"
				onChange={clickHandle}
			/>
			<label className="form-check-label" htmlFor="flexSwitchCheckDefault">
				Dark mode
			</label>
		</div>
	);
};

const darkModeClass = (dm, text) => {
	if (typeof text === "undefined") {
		if (dm) {
			document.body.classList.add("body-dark");
			return "bg-dark text-light";
		} else {
			document.body.classList.remove("body-dark");
			return "bg-light text-secondary";
		}
	} else {
		return dm ? "text-light" : "text-secondary";
	}
};

export { darkModeClass };
export default DarkModeSwitcher;
