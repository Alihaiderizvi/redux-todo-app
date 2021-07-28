import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";

ReactDOM.render(
	<>
		<Provider store={store}>
			{/* Pass Store as a prop */}
			<App />
		</Provider>
	</>,
	document.getElementById("root")
);
