import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

