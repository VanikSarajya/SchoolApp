import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import App from './containers/App';
import store from './store';
import "./index.css";
window.axios=require('axios');

window.axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('jwtToken');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, function(err) {
    return Promise.reject(err);
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)