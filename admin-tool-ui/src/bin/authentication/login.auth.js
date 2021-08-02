import axios from "axios";

const getAuthData = state => {
	const fetchInfo = {
		url: "http://localhost",
		port: "2211",
		path: "api/auth/profile",
		headers: {
			h: {
				"Content-Type": "application/json",
			},
			api: "902b01087749415b673e27e8824e28736d9500802fe069218f273417084f413acf45733ce9507aa703aa881b6f941f48fe256cb7589285b7d45f10330cee81b4",
		},
	};
	axios
		.get(`${fetchInfo.url}:${fetchInfo.port}/${fetchInfo.path}`, {
			headers: fetchInfo.headers.h,
		})
		.then(res => state(res.data[0]))
		.catch(error => console.log(error.response));
};

const setLog = (_id, _token) => {
	const fetchInfo = {
		url: "http://localhost",
		port: "2211",
		path: "api/auth/logs",
		headers: {
			h: {
				"Content-Type": "application/json",
			},
		},
	};

	axios
		.post(`${fetchInfo.url}:${fetchInfo.port}/${fetchInfo.path}`, {
			_id_profile: _id,
			auth_token: _token,
		})
		.then(res => console.log(res.data))
		.catch(error => console.log(error.response));
};

const getLogs = state => {
	const fetchInfo = {
		url: "http://localhost",
		port: "2211",
		path: "api/auth/logs",
		headers: {
			h: {
				"Content-Type": "application/json",
			},
			api: "902b01087749415b673e27e8824e28736d9500802fe069218f273417084f413acf45733ce9507aa703aa881b6f941f48fe256cb7589285b7d45f10330cee81b4",
		},
	};
	axios
		.get(
			`${fetchInfo.url}:${fetchInfo.port}/${fetchInfo.path}?api_key=${fetchInfo.headers.api}`,
			{
				headers: fetchInfo.headers.h,
			}
		)
		.then(res => state(res.data[res.data.length - 1]))
		.catch(error => console.log(error.response));
};

export { getAuthData, setLog, getLogs };
