import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../bin/data-types/state/type";

const ConfigMenu = (): JSX.Element => {
	// Global states
	const configMenuExpanderState = useSelector(
		(state: RootState) => state.configMenuExpander.status
	);
	
	return (
		<aside
			className={`custom-col custom-col--configuration_menu bg-light border-end ${!configMenuExpanderState && "hidden"}`}>

		</aside>
	);
};

export default ConfigMenu;