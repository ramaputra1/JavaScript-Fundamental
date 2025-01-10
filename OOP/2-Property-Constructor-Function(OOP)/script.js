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
    this.age = ""; // add properties age to all objects in Person
    this.major = ""; // add properties major to all objects in Person
  }

  const rama = new Person(); // has 2 properties age & major
  // how to add the value:
  rama.age = 22; // nameObject.nameProperty
  // it's okay to has only 1 property that has a value, so the major of rama will empty

  const assela = new Person(); // has 2 properties age & major
  assela.age = 22; // nameObject.nameProperty
  assela.major = "accounting";
}
