//  Store js plays the main role
//  This is where all of the data is stored.

import { createStore } from "redux";
import rootReducer from "./reducers/Index";

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// now this store export should be imported to the index.js (main File).
