import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const HomePage = () => (
  <div className="jumbotron center">
    <h1 className="lead">Ghibli Explorer</h1>
    <h4 className="subtitle">made with react</h4>
    <div>
      <Link to="films">
        <button className="btn btn-lg btn-primary"> Start browsing movies</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
