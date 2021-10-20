import {Provider} from 'react-redux';
import React from 'react';
import App from './app';


const Root = ({ store }) => ( //from the entry file todo_redux.jsx
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;