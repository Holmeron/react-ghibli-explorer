import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const Header = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">Ghibli Explorer</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="films" activeClassName="active">Films</Link></li>
              <li><Link to="people" activeClassName="active">People</Link></li>
              <li><Link to="species" activeClassName="active">Species</Link></li>
              <li><Link to="locations" activeClassName="active">Locations</Link></li>
              <li><Link to="terrain" activeClassName="active">Terrain</Link></li>
              <li><Link to="vehicles" activeClassName="active">Vehicles</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
              <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="../navbar-fixed-top/">Fixed top</a></li>
            </ul>
          </div>
        </div>
      </nav>
);

export default Header;
