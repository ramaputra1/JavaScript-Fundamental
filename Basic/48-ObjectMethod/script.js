const person = {
  name: "Rama",
  sayHello: function (name) {
    // anonym function (Method)
    console.info(`Hi, ${name}`);
  },
};

person.sayHello("Rama"); // to call: dont forget start with the name of object

// add method in an object
{
  const person = {
    name: "Rama",
  };

  //add an function to be an method
  person.sayHello = function (name) {
    console.info(`Hii, ${name}`);
  };

  person.sayHello("Rama");
}
