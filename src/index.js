import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';

import App from './App';

// Axios interceptors
axios.interceptors.request.use((request) => {

    if (localStorage.getItem('user_token')) {
        request.headers.Authorization = localStorage.getItem('user_token');
    }
    return request;
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);



