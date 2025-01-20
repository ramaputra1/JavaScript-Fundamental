// global scope. function, nested function

console.info(this); // window // glbal scope

function sample() {
  // function
  console.info(this); // window

  function inner() {
    // nested function
    console.info(this); // window
  }
}

// object method
{
  const person = {
    name: "Rama", // our name property
    sayHello: function (name) {
      console.info(this); // refer to person (the object)
    },
  };

  person.sayHello("Rama");
}

// NEXT EXPLANATION:

{
  const person = {
    name: "Rama", // our name property // we can access these property using keyword "THIS"
    sayHello: function (name) {
      console.info(`Hi ${name} my name is ${this.name}`); // using "this.name" will access Rama or property from PERSON, if we do not use this it will have different output
    },
  };

  person.sayHello("Assela");
}
