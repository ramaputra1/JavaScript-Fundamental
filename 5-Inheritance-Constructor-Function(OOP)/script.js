// 1st constructor, Employee
function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, My name is ${this.firstName}`);
  };
}

// so if we want Employee in Manager we do not just copy paste, but we call it like inherit like this:

// 2nd constructor, Manager
function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName); // name.call(this, parameter)
}

const rama = new Manager("Rama", "Putra");
console.info(rama);
// in rama we will have firstName, sayHello and lastName, how can they have firstName & sayHello? because we inherit it or call it from Employee so Manager has that too
