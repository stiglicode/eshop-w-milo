import axios from "axios";
import { LoginAuthState } from "../data-types/fetch/type";
import { SetLocalStorage } from "../safe-localStorage";
import { POST_SCHEMA } from "./fetch-schema";
import {FetchSecret} from "../data-types/fetch/enum";

class LoginAuth extends POST_SCHEMA {
	private state: LoginAuthState;

	constructor(
		path: string,
		api: string,
		reqObject: Record<string, unknown>,
		state: LoginAuthState
	) {
		super(path, api, reqObject);
		this.state = state;
	}

	public request = async (): Promise<void> => {
		try {
			const res = await axios.post(this.path, this.reqObject);
			this.state(res.data.auth);

			return SetLocalStorage(FetchSecret.TOKEN, res.data.token);
		} catch (error: any) {
			return console.log(error.response);
		}
	};
}

export { LoginAuth };

// export default post_protocol;
