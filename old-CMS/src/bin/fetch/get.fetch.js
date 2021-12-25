import axios from "axios";
require("dotenv").config();

class GetFetchData {
	constructor(Path, State, API = false) {
		this.fetchInfo = {
			url: "http://localhost",
			port: 2211,
			path: `api/${Path}`,
			headers: {
				h: {
					"Content-Type": "application/json",
				},
				api: "902b01087749415b673e27e8824e28736d9500802fe069218f273417084f413acf45733ce9507aa703aa881b6f941f48fe256cb7589285b7d45f10330cee81b4",
			},
		};
		this.STATE = State;
		this.isAPI = API;
	}
	FetchURI = () => {
		return {
			uri: `${this.fetchInfo.url}:${this.fetchInfo.port}/${
				this.fetchInfo.path
			}${this.isAPI === true ? `?api_key=${this.fetchInfo.headers.api}` : ""}`,
			h: {
				headers: this.fetchInfo.headers.h,
			},
		};
	};

	_last = async () => {
		try {
			const res = await axios.get(this.FetchURI().uri, this.FetchURI().h);
			return this.STATE(res.data[res.data.length - 1]);
		} catch (error) {
			return console.log(error.response);
		}
	};
	_first = async () => {
		try {
			const res = await axios.get(this.FetchURI().uri, this.FetchURI().h);
			return this.STATE(res.data[0]);
		} catch (error) {
			return console.log(error.response);
		}
	};
	_all = async () => {
		try {
			const res = await axios.get(this.FetchURI().uri, this.FetchURI().h);
			return this.STATE(res.data);
		} catch (error) {
			return console.log(error.response);
		}
	};

	get first() {
		return this._first();
	}
	get last() {
		return this._last();
	}
	get all() {
		return this._all();
	}
}

const get = (PATH, STATE, API) => {
	const GET = new GetFetchData(PATH, STATE, API);

	return GET;
};

export default get;
