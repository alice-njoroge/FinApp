import React from 'react';
import ReactDOM from 'react-dom';
import './styles/fontawesome-free/css/all.css';
import './styles/sb-admin-2.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import axios from "axios";
import history from './history';
import configureStore from './configureStore';

const store = configureStore();


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
