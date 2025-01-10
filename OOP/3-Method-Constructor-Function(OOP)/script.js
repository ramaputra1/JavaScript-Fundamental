// Normal way to create object:
{
  // 1. Object "rama":
  const rama = {
    age: 22,
    major: "computer science",
  };

  // 2. object "assela":
  const assela = {
    age: 22,
    major: "accounting",
  };
}

// Way to create an object by create the constructor function (or class in ecma 6):
{
  // our class or constructor funtion: Person
  function Person() {
    this.age = "";
    this.major = "";
    // add method or function:
    // same way: this.name = function () {}
    // here: we add sayHello method that has "name" as parameter
    this.sayHello = function (name) {
      console.info(`Hello, ${name}, my name major is ${this.major}`);
    };
  }

  // NOWWW! because we have sayHello in our Person class, that means rama and assela has that method too, we can call that
  const rama = new Person();
  rama.age = 22;
  rama.major = "computer science";
  rama.sayHello("HRD"); // use the method sayHello

  const assela = new Person();
  assela.age = 22;
  assela.major = "accounting";
  assela.sayHello("HRD"); // use the method sayHello

  console.log(rama);
  console.log(assela);
}
