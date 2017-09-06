import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import FilmsPage from './containers/FilmsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="films" component={FilmsPage} />
  </Route>
);
