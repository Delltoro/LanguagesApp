import { createStore , applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducers from "../reducers/index";

export function initializeStore() {
    return createStore(reducers , {} , applyMiddleware(thunkMiddleware));
}