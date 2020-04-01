import React from 'react';
// import Portfolio1 from './PortfolioOne';
// import Portfolio2 from './PortfolioTwo';
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <NavLink to="/portfolioOne">Portfolio One</NavLink>
    <NavLink to="/portfolioTwo">Portfolio Two</NavLink>
  </div>
);

export default Portfolio;
