// 'employee' class
class Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is employee ${this.name}`);
  }
}

// 'manager' class
class Manager extends Employee {
  sayHello(name) {
    console.info(`Hello ${name}, my name is manager ${this.name}`);
  }
}

const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

const eko = new Manager();
eko.name = "Eko";
eko.sayHello("Joko");

console.info(budi); // budi is employee
console.info(eko); // here in eko you will found the sayHello in first (lowest) prototype which is manager

{
  // 'employee' class
  class Employee {
    sayHello(name) {
      console.info(`Hello ${name}, my name is employee ${this.name}`);
    }
  }

  // 'manager' class
  class Manager extends Employee {
    // sayHello(name) {
    //   console.info(`Hello ${name}, my name is manager ${this.name}`);
    // } // I comment this
  }

  const budi = new Employee();
  budi.name = "Budi";
  budi.sayHello("Joko");

  const eko = new Manager();
  eko.name = "Eko";
  eko.sayHello("Joko");

  console.info(budi); // budi is employee
  console.info(eko); // here in eko you will still will found sayHello in employee prototype (second proto)
}

// so in sum: you can find the things in each prototype
