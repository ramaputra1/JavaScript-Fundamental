// 'employee' class
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.firstName}`);
  }
}

// 'manager' class
class Manager extends Employee {
  constructor(firstName, lastName) {
    // firstName is required cause from the parent, then just add the lastName there
    super(firstName); // here you are required to declared or have the constructor from your parent // use super()
    this.lastName = lastName;
  }

  sayHello(name) {
    console.info(
      `Hello ${name}, my name is manager ${this.firstName} ${this.lastName}`
    );
  }
}

const budi = new Employee("Budi");
budi.sayHello("Joko");

const eko = new Manager("Eko", "Khannedy");
eko.sayHello("Joko");

console.info(budi);
console.info(eko);
