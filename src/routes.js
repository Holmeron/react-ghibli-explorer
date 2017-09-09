import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import FilmsPage from './containers/FilmsPage';
import FilmDetailsPage from './containers/FilmDetailsPage';

import ListPage from './containers/ListPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="films" component={ListPage} entityType='films' />
    <Route path="films/:filmId" component={FilmDetailsPage} />
  </Route>
);
