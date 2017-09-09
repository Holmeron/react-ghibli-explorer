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
          <Link to="/" className="navbar-brand">Ghibli Explorer</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/films">Films</Link></li>
              <li><Link to="/people">People</Link></li>
              <li><Link to="/species">Species</Link></li>
              <li><Link to="/locations">Locations</Link></li>
              <li><Link to="/vehicles">Vehicles</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="./">Default <span className="sr-only">(current)</span></a></li>
              <li><a href="../navbar-static-top/">Static top</a></li>
              <li><a href="../navbar-fixed-top/">Fixed top</a></li>
            </ul>
          </div>
        </div>
      </nav>
);

export default Header;
