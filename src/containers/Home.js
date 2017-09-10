import React from 'react';
import { Link } from 'react-router';

// Home page component
const HomePage = () => (
  <div className="home-page jumbotron center">
    <h1 className="lead">Ghibli Explorer</h1>
    <h4 className="subtitle">made with react</h4>
    <div>
      <Link to="films">
        <button className="btn btn-lg btn-primary"><i className="gb-icon approved"></i> Start browsing movies</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
