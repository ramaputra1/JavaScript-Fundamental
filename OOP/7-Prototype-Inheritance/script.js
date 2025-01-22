function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; // uncomment this for the wrong approach
Manager.prototype = Object.create(Employee.prototype); // this is the right one

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Budi");
employee.sayHello("Joko");

const manager = new Manager("Eko");
manager.sayHello("Joko");

console.info(employee);
console.info(manager);
