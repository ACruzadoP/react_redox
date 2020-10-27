import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//GLOBALIZED STATE
import {createStore} from 'redux';
//REDUCER
import allReducers from './reducers';
//PROVIDER
import {Provider} from 'react-redux';

//REDUCER
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//ReactDOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
,document.getElementById('root'));
