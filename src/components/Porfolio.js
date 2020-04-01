import React from 'react';
// import Portfolio1 from './PortfolioOne';
// import Portfolio2 from './PortfolioTwo';
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <Link to="/portfolio/1">Portfolio One</Link>
    <Link to="/portfolio/2">Portfolio Two</Link>
  </div>
);

export default Portfolio;
