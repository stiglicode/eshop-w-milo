import axios from "axios";
import { Dispatch } from "redux";
import {
	UserAuthReducer,
	UserAuthReducerObject,
} from "../data-types/state/type";
import { GetLocalStorage } from "../safe-localStorage";
import {FetchSecret} from "../data-types/fetch/enum";

class InitUserAuth {
	state: (
		state: UserAuthReducerObject
	) => (dispatch: Dispatch<UserAuthReducer>) => void;

	constructor(
		state: (
			state: UserAuthReducerObject
		) => (dispatch: Dispatch<UserAuthReducer>) => void
	) {
		this.state = state;
	}

	public request = async (): Promise<
		(dispatch: Dispatch<UserAuthReducer>) => void
	> => {
		try {
			const result = await axios.get("/api/auth", {
				headers: {
					["x-access-token"]: GetLocalStorage("atn_jwt"),
				},
			});
			return this.state(result.data);
		} catch (error: any) {
			throw Error(error.response);
		}
	};
}

export { InitUserAuth };
