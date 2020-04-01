import React from 'react';

const PortfolioOne = props => {
  return <div>Portfolio {props.match.params.id}</div>;
};

export default PortfolioOne;
