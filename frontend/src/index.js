import React from 'react';
import ReactDOM from 'react-dom';
import './styles/fontawesome-free/css/all.css';
import './styles/sb-admin-2.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import rootReducer from "./reducers/rootReducer";
import axios from "axios";
import history from './history';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunkMiddleware))

);

const token = localStorage.getItem('token');
if (token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter history={history}>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
