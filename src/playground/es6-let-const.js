// const square = function(x) {
//   return x * x;
// };

// console.log(square(8));

// const squareArrow = x => {
//   return x * x;
// };
// console.log(squareArrow(6));

// // const Name = 'Hesam Alavi';
// // console.log(Name);

// const getFirstName = name => name.split(' ')[0];
// console.log(getFirstName('Hesam Alavi'));

const user = {
  name: 'Hesam',
  cities: ['Tehran', 'Tokyo', 'Sydney'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);
  }
};
// const user = {
//   name: 'Hesam',
//   cities: ['Tehran', 'Tokyo', 'Sydney'],
//   printPlacesLived() {
//     this.cities.forEach(city => {
//       console.log(this.name + ' has lived in ' + city);
//     });
//   }
// };

console.log(user.printPlacesLived());

// const multiplier = {
//   numbers: [0, 22, 3, 5, 18],
//   multiplyBy: 3,
//   multiply() {
//     return this.numbers.map(n => n * this.multiplyBy);
//   }
// };

const multiplier = {
  numbers: [1, 34, 22, 11],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(n => this.multiplyBy * n);
  }
};

console.log(multiplier.multiply());
