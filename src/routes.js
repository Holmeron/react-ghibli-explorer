import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';

import EntityDetailsPage from './containers/EntityDetailsPage';
import ListPage from './containers/ListPage';

import PersonListPage from './containers/PersonListPage';
import PersonDetailsPage from './containers/PersonDetailsPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path="films" component={ListPage} entityType='films' />
    <Route path="films/:entityId" component={EntityDetailsPage} entityType='films' />

    <Route path="people" component={ListPage} entityType='people' />
    <Route path="people/:entityId" component={EntityDetailsPage} entityType='people' />

    <Route path="species" component={ListPage} entityType='species' />
    <Route path="species/:entityId" component={EntityDetailsPage} entityType='species' />

    <Route path="locations" component={ListPage} entityType='locations' />
    <Route path="locations/:entityId" component={EntityDetailsPage} entityType='locations' />

    <Route path="vehicles" component={ListPage} entityType='vehicles' />
    <Route path="vehicles/:entityId" component={EntityDetailsPage} entityType='vehicles' />

    <Route path="/persons" component={PersonListPage} entityType='persons' />
    <Route path="persons/:name" component={PersonDetailsPage} entityType='persons' />
  </Route>
);
