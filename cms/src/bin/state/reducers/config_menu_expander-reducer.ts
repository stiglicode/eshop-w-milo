import { ConfigMenu } from "../../data-types/state/enum";
import {
	ConfigMenuExpander,
	ConfigMenuExpanderObject,
} from "../../data-types/state/type";

const initialState = {
	status: false,
};

const reducer = (
	state: ConfigMenuExpanderObject = initialState,
	action: ConfigMenuExpander
) => {
	switch (action.type) {
	case ConfigMenu.STATUS:
		return (state = action.payload);
	default:
		return state;
	}
};

export default reducer;
