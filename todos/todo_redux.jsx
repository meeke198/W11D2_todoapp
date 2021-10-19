import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './frontend/store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<h1>Todos App</h1>, document.getElementById("root"))
});