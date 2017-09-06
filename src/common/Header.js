import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => (
  <div className="text-center">
    <nav className="navbar navbar-default">
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="films" activeClassName="active">Films</Link>
      {" | "}
      <Link to="people" activeClassName="active">People</Link>
      {" | "}
      <Link to="species" activeClassName="active">Species</Link>
      {" | "}
      <Link to="locations" activeClassName="active">Locations</Link>
      {" | "}
      <Link to="terrain" activeClassName="active">Terrain</Link>
    </nav>
  </div>
);

export default Header;
