'use strict';

// import React from 'react';
console.log('app.js is runniddsng');

// JSX - Javascript XML is a syntax extension to JavaScript
var template = React.createElement(
  'p',
  null,
  'This '
);
console.log('test');
// var template = React.createElement('h1', null, 'this is jsx from ');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
