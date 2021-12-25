import { Dispatch } from "redux";
import {
	ConfigMenu,
	UserAuthenticationForState,
} from "../../data-types/state/enum";
import {
	ConfigMenuExpander,
	ConfigMenuExpanderObject,
	UserAuthReducer,
	UserAuthReducerObject,
} from "../../data-types/state/type";

const user_auth = (state: UserAuthReducerObject) => {
	return (dispatch: Dispatch<UserAuthReducer>): void => {
		dispatch({
			type: UserAuthenticationForState.USER,
			payload: state,
		});
	};
};

const config_menu_expander = (state: ConfigMenuExpanderObject) => {
	return (dispatch: Dispatch<ConfigMenuExpander>): void => {
		dispatch({
			type: ConfigMenu.STATUS,
			payload: state,
		});
	};
};

export { user_auth, config_menu_expander };
