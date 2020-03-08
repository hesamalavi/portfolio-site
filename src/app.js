import React from 'react';
console.log('app.js is runnisng');

// JSX - Javascript XML is a syntax extension to JavaScript
var template = <p>This sis jsx from my app</p>;
console.log('test');
// var template = React.createElement('h1', null, 'this is jsx from ');
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
