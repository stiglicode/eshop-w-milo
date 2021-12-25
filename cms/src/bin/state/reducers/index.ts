import { combineReducers } from "redux";
import user_auth from "./user_auth-reducer";
import config_menu_expander from "./config_menu_expander-reducer";

const reducers = combineReducers({
	userAuthentication: user_auth,
	configMenuExpander: config_menu_expander,
});

export default reducers;
