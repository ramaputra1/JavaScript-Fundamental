// The Manual One
{
  const names = ["Rama", "Adi", "Putra", "Budi", "Joko"]; // the array

  // create each variable for each index
  const firstName = names[0];
  const middleName = names[1];
  const lastName = names[3];

  // call it
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

// Destructiong Approach
{
  {
    const names = ["Rama", "Adi", "Putra", "Budi", "Joko"];
    let [firstName, middleName, lastName, ...others] = names; // the destructuring

    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
    console.info(others);
  }
}

// oin object and // Destructuring Nested Object
{
  const person = {
    firstName: "Rama",
    lastName: "Putra",
    address: {
      street: "Kulanui",
      city: "Jakarta",
      country: "Indonesia",
    },
    hobby: "Game",
    channel: "Programmer Zaman Now",
  };

  let {
    firstName,
    lastName,
    address: { city, street, country }, // nested
    ...others
  } = person; // destructuring // call the property

  console.info(firstName);
  console.info(lastName);
  console.info(city);
  console.info(street);
  console.info(country);
  console.info(others);
}

// Destruc in Function PARAMETER in object
{
  function displayPerson({ firstName, middleName, lastName }) {
    // it's (above) destructuring {}
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
  }

  const person = {
    firstName: "Eko",
    middleName: "Kurniawan",
    lastName: "Khannedy",
  };

  displayPerson(person);
}

// in array
{
  function sum([first, second]) {
    return first + second;
  }

  console.info(sum(1, 20));
}

// Destruct Default Value
const names = ["Rama", "Adi"];
const [firstName, middleName, lastName = "Default"] = names;

console.info(firstName);
console.info(middleName);
console.info(lastName);

// use another variables's name
const person = {
  firstName: "Rama",
  middleName: "Adi",
  lastName: "Putra",
};

let { firstName: first, middleName: middle, lastName: last } = person;
console.info(first);
console.info(middle);
