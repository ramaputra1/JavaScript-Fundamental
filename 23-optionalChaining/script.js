const person = {
  address: {
    country: "Indonesia",
  },
};

// Using Optional Chaining:
let country = person?.address?.country;

// Using if else:
/*
if(person.address !== undefined && person.address !== null){
    country = person.address.country;
}
*/

document.writeln(`success`);

document.writeln(`<p>${country}</p>`); // Will show "Indonesia" because we have country property and it's contain a string "Indonesia"

document.writeln(`success`);

document.writeln("</br>");
document.writeln("</br>");
document.writeln("</br>");
document.writeln("</br>");
document.writeln("</br>");

{
  const person = {};

  // Using Optional Chaining:
  let country = person?.address?.country; // If person nullish then the rest will be nullish, and so on (check each property, if it's nullish or not)

  document.writeln(`success`);

  document.writeln(`<p>${country}</p>`); // Will show Undefined, because the country property = nullish

  document.writeln(`success`);
}
