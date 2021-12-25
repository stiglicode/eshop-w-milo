import axios from "axios";
require("dotenv").config();

class PostFetchData {
	constructor(Path, API = false) {
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

	all = async (_id, _token) => {
		try {
			const res = await axios.post(this.FetchURI().uri, {
				_id_profile: _id,
				auth_token: _token,
			});
			return console.log(res.data);
		} catch (error) {
			return console.log(error.response);
		}
	};
}

const post = (PATH, ID, TOKEN, API) => {
	const POST = new PostFetchData(PATH, API);
	return POST;
};

export default post;
