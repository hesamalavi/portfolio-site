import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import Contact from '../components/Contact';
import Portfolio from '../components/Porfolio';
import PortfolioOne from '../components/PortfolioOne';
import PortfolioTwo from '../components/PortfolioTwo';
import Home from '../components/Home';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />

        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/portfolioOne/:id" component={PortfolioOne} />
        <Route path="/portfolioTwo/:id" component={PortfolioTwo} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
