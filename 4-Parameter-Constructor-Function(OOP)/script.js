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

    this.sayHello = function (name) {
      console.info(`Hello, ${name}, my name major is ${this.major}`);
    };
  }

  const rama = new Person();
  rama.age = 22;
  rama.major = "computer science";
  rama.sayHello("HRD");

  const assela = new Person();
  assela.age = 22;
  assela.major = "accounting";
  assela.sayHello("HRD");

  console.log(rama);
  console.log(assela);
}

// IMPORTANT:
// This is why we need to use parameter, more easierrrr:

{
  // our parameter in person
  function Person(age, major) {
    this.age = age; // property age catch value in age parameter, so it will have the value as the same as the age major parameter will have later
    this.major = major; // property major catch value in major parameter, so it will have the value as the same as the age major parameter will have later

    this.sayHello = function (name) {
      console.info(`Hello, ${name}, my name major is ${this.major}`);
    };
  }

  const rama = new Person(22, "computer science"); // the value just go there in the parameter, no need to use rama.age = 22 to init the value anymore
  // rama.age = 22;
  // rama.major = "computer science";
  rama.sayHello("HRD");

  const assela = new Person(22, "accounting");
  // assela.age = 22;
  // assela.major = "accounting";
  assela.sayHello("HRD");

  console.log(rama);
  console.log(assela);
}
