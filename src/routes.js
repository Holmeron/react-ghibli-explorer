import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Home from './components/Home';
import FilmsPage from './containers/FilmsPage';
// import PeoplePage from './containers/PeoplePage';
// import SpeciesPage from './containers/SpeciesPage';
// import LocationsPage from './containers/LocationsPage';
// import TerrainsPage from './containers/TerrainsPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="films" component={FilmsPage} />
    {/*
      <Route path="people" component={PeoplePage} />
    <Route path="species" component={SpeciesPage} />
    <Route path="locations" component={LocationsPage} />
    <Route path="terrain" component={TerrainsPage} />
    */}
  </Route>
);
