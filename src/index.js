import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "./app/providers/StoreProvider";
import {AppRouter} from "./app/providers/router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <StoreProvider>
            <AppRouter>
                <App />
            </AppRouter>
        </StoreProvider>
    </BrowserRouter>

);
