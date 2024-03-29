import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


const container = document.getElementById('body-content');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <App tab="home"/>
    </BrowserRouter>
);
