// 'Class' Customer
class Customer {
  // this all our public variable
  firstName;
  lastName;
  balance = 0;

  // Constructor
  constructor(firstName, lastName) {
    // we can access those variable here and it will stick to the instance object
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // all methods
  sayHello() {}
}

const eko = new Customer("Eko", "Khannedy"); // if we let it empty, it will be undefined
console.info(eko);
