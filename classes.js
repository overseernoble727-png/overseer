class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const p1 = new Person("Alice", 25);
p1.greet();  // Output: Hello, my name is Alice and I'm 25 years old.
