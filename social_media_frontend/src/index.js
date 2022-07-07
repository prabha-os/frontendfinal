import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

const root = document.getElementById("root");

render(
    <App />,
    root
);

reportWebVitals();
