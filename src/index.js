import React from 'react';
import ReactDOM from 'react-dom';
import store from './app/store';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import { Router } from "react-router-dom";
import {createBrowserHistory} from 'history';

import './index.scss';

import App from './App';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={ store }>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
