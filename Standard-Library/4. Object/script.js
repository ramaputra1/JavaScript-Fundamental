{
  // object freeze (can't modify it anymore) & seal (can't modify the property)

  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };

  Object.freeze(person);
  // Object.seal(person);

  person.firstName = "Budi";
  person.middleName = "Kurniawan";
  delete person.lastName;

  console.info(person);
}

{
  // object assign

  const target = {
    firstName: "Eko",
  };
  const source = {
    lastName: "Khannedy",
  };

  Object.assign(target, source); // add source to target
  console.info(target); // now target will have stuff from source
  console.info(source);
}

{
  // Object property name & value

  const person = {
    firstName: "Eko",
    lastName: "Khannedy",
  };

  console.info(Object.values(person)); // take all values
  console.info(Object.getOwnPropertyNames(person)); // take all property
  // output would be in array
}
