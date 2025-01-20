const person = {
  name: "Rama",
  sayHello: (name) => {
    //use arrow function
    console.info(this);
    console.info(`Hello ${name}, My Name is ${this.name}`);
  },
};

person.sayHello("Budi");
