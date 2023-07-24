import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
=======
import './app/styles/index.scss';
import App from './app/App';
import {AppRouter} from "./app/providers/router";
import {BrowserRouter} from "react-router-dom";
import StoreProvider from "./app/providers/StoreProvider/ui/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StoreProvider>
            <AppRouter>
                <App />
            </AppRouter>
        </StoreProvider>
    </BrowserRouter>

>>>>>>> a988cd3 (add router, store)
);
