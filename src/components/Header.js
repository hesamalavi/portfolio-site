import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" exact={true}>
      Portfolio
    </NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </header>
);

export default Header;
