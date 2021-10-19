import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './frontend/store/store';
import { receiveTodo, receiveTodos, removeTodo } from './frontend/actions/todo_actions';
import { receiveStep, receiveSteps, removeStep } from './frontend/actions/step_actions';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.store = store;

    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo; 

    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
    window.removeStep = removeStep; 
    
    ReactDOM.render(<h1>Todos App</h1>, document.getElementById("root"))
});