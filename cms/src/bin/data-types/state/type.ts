import reducers from "../../state/reducers";
import {ConfigMenu, UserAuthenticationForState} from "./enum";

export type RootState = ReturnType<typeof reducers>;

//# User authentication
//
interface UserAuthReducerData {
	authentication: boolean;
	user_details: {
		created_at: string;
		id: string;
		name: string;
		permission: string;
	};
}

interface UserAuthReducerSave {
	type: UserAuthenticationForState.USER;
	payload: UserAuthReducerData;
}

export type UserAuthReducer = UserAuthReducerSave;
export type UserAuthReducerObject = UserAuthReducerData;

//# Config menu expander
//

interface ConfigMenuExpanderData {
	status: true | false;
}

interface ConfigMenuExpanderSave {
	type: ConfigMenu.STATUS;
	payload: ConfigMenuExpanderData;
}

export type ConfigMenuExpander = ConfigMenuExpanderSave;
export type ConfigMenuExpanderObject = ConfigMenuExpanderData;
