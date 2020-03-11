class Person {
  constructor(name = 'Anonymous', location = 'unknown', age = 0) {
    this.name = name;
    this.location = location;
    this.age = age;
  }
  getGreeting() {
    return (
      // 'Hi, my name is ' + this.name + ' and I am from ' + this.location + '!'
      `Hi, my name is ${this.name} and I am from ${this.location}`
    );
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Hesam Alavi', 'Tehran', 39);
console.log(me.getGreeting());
console.log(me.getDescription());
const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
