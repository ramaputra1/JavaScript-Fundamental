function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${firstName} ${lastName}`);
  };
}

const rama = new Person("Rama", "Putra");
const assela = new Person("Assela", "Sutrisno");

// check in inspect console
console.log(rama);
console.log(assela);

// check that the __proto__ is always inherited from the thing before it or the parent

{
  // add property or method to prototype #1
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
      console.info(`Hello ${firstName} ${lastName}`);
    };
  }

  const rama = new Person("Rama", "Putra");
  rama.sayBye = function () {
    // here we add method only in rama object
    console.info("bye bye");
  };

  const assela = new Person("Assela", "Sutrisno");

  // check in inspect console
  console.log(rama);
  console.log(assela);
}

{
  // add property or method to prototype #2
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function (name) {
      console.info(`Hello ${firstName} ${lastName}`);
    };
  }

  const rama = new Person("Rama", "Putra");
  const assela = new Person("Assela", "Sutrisno");

  Person.prototype.sayBye = function () {
    // person . prototype . name property
    console.info("byeeeee");
  }; // add property method in the prototype (all object will have it)

  // check in inspect console
  console.log(rama);
  console.log(assela);

  // access:
  rama.sayBye();
}
