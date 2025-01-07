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
  // First create your constructor function (class) first:
  function Person() {} // this is the blueprint that we will have (constructor function or class)

  // by Person class we will make objects:
  // using new keyword: const nameObject = new nameClass
  const rama = new Person(); // now we have Object "rama"
  const assela = new Person(); // object "assela"

  // later we will learn how to add the properties
}
