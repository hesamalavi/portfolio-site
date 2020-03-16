class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    // this.location = location;
    this.age = age;
  }
  getGreeting() {
    return `Hi, my name is ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    // to turn this.major into a boolean, in this case looking for a truthy value
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

const me = new Traveler('Hesam Alavi', 39, 'Tehran');
// console.log(me);
console.log(me.getGreeting());
// console.log(me);
const other = new Traveler();
// console.log(other.hasMajor());
console.log(other.getGreeting());
