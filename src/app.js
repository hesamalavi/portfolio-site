import React from 'react';
import ReactDOM from 'react-dom';
import validator from 'validator';

console.log(validator.isEmail('test@test.com'));

const template = <p>this is jsx</p>;
ReactDOM.render(template, document.getElementById('app'));

// // import './utils.js';
// import { square, add } from './utils';
// import isSenior, { isAdult, canDrink } from './person';

// // console.log('app.js is running');
// // console.log(square(4));
// // console.log(add(4, 4));

// console.log(isAdult(7));
// console.log(canDrink(7));
// console.log(isSenior(99));
