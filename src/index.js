

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/main.scss';

import $ from 'jquery';
window.jQuery = $;
require('bootstrap');


ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('root')
);
