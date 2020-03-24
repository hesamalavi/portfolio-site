import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

ReactDOM.render(
  <IndecisionApp options={['Give all me money away', 'Swim with sharks']} />,
  document.getElementById('app')
);
