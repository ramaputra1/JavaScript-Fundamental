const person = {}; // empty object

// Add
person["Name"] = "Rama"; // Declare the "Properties" (NAME) then the "Value" (RAMA)
person["From"] = "Indonesia";
person["Age"] = 22; // We can use number as well as the value

console.table(person); // Look the console

// delete
delete person["Age"];

console.table(person); // Look the console (Now Age is removed)

// !!! MORE EFFECTIVE WAY:
{
  const person = {
    nameEffective: "Rama",
    fromEffective: "Indonesia",
    ageEffective: 22,
  };

  console.table(person);

  // HOW TO CALLED?
  console.warn(`Info 1: ${person.nameEffective}`); // nameObject.nameProperty
  console.warn(`Info 2: ${person.fromEffective}`);
  console.warn(`Info 3: ${person.ageEffective}`);
}
