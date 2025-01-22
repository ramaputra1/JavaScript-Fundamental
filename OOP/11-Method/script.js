class Person {
  constructor(name) {
    this.name = name;
    // this.sayHello = function (name) {
    //   console.info(`Hello ${name}, my name is ${this.name}`);
    // }; // *uncomment this, this one will stick to instance object
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is ${this.name}`); // this one will stick to prototype so use this (inside class, not constructor)
  }
}

const eko = new Person("Eko");
console.info(eko);
eko.sayHello("Joko");

const budi = new Person("Budi");
console.info(budi);
budi.sayHello("Joko");
