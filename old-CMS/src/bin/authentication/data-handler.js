import { get } from "../fetch";

class DataHandler {
	constructor(data) {
		this.name = data.username;
		this.password = data.password;
		this.isLogged = [false, false];
		this.loggedID;
	}

	handleData = fetchData => {
		if (fetchData) {
			const { name, password } = fetchData;
			if (this.dataValidation(name, this.name)) {
				this.isLogged[0] = true;
			}
			if (this.dataValidation(password, this.password)) {
				this.isLogged[1] = true;
			}
			if (
				this.dataValidation(name, this.name) &&
				this.dataValidation(password, this.password)
			) {
				return (this.loggedID = fetchData._id);
			}
		} else {
			console.error("412");
		}
	};

	dataValidation(db, form) {
		if (db === form) {
			return true;
		} else {
			return false;
		}
	}

	async fetchData() {
		return await get("auth/profile", this.handleData, false).last;
	}

	result(statusState, idState) {
		this.fetchData().then(() => {
			statusState(this.isLogged);
			idState(this.loggedID);
		});
	}
}

const formDataHandler = (values, [statusState, idState]) => {
	const formSubmit = new DataHandler(values);

	return formSubmit.result(statusState, idState);
};

export default formDataHandler;
