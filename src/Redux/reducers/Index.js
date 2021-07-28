// Global Reducer, where all of the reducers would be mentioned.

import TodoReducer from "./TodoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	TodoReducer,
});

export default rootReducer;
