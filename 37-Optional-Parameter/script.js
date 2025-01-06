function sayHello(firstName, middleName, lastName) {
  // we got 3 parameter here
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

sayHello(); // output: 3 undefined represent those 3 parameters
sayHello("Rama"); // output: "Rama" then 2 undefined represent the rest of parameter
sayHello("Rama", "Adi"); // output: "Rama" then "Adi" then undefined represent the rest of parameter
sayHello("Rama", "Adi", "Putra"); // output: Rama Adi Putra
sayHello("Rama", "Adi", "Putra", "Budi"); // output: No error, still show Rama Adi Putra // But make sure do not over
