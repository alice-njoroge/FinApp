import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import { createLogger} from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();

export default function configureStore (){
const middlewares = [thunkMiddleware, loggerMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancer = composeWithDevTools(middlewareEnhancer);

const store = createStore(rootReducer, middlewareEnhancer);

return store;

}