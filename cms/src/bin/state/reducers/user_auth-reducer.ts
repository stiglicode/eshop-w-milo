import { UserAuthenticationForState } from "../../data-types/state/enum";
import {
	UserAuthReducer,
	UserAuthReducerObject,
} from "../../data-types/state/type";

const initialState = {
	authentication: false,
	user_details: {
		created_at: "",
		id: "",
		name: "",
		permission: "",
	},
};

const reducer = (
	state: UserAuthReducerObject = initialState,
	action: UserAuthReducer
): UserAuthReducerObject => {
	/* eslint-disable */
	switch (action.type) {
		case UserAuthenticationForState.USER:
			return (state = action.payload);
		default:
			return state;
	}
	/* eslint-enable */
};

export default reducer;
