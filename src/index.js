

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';
import './styles/main.scss';

import $ from 'jquery';
window.jQuery = $;
require('bootstrap');

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);
