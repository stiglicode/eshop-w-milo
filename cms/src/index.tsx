import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./bin/state";
import Root from "./Root";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Root />
		</Provider>
	</React.StrictMode>,

	document.getElementById("root")
);
