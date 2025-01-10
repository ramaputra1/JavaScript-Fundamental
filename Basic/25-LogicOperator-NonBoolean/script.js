// OR
console.info("Hello" || ""); // Output: Hello, because the first truthy from left to right is "Hello"
console.info("" || []); // Output: [], because the first truthy from left to right is [], "" is falsy
console.info("0" || "NOL"); // Output: 0, because the first truthy is "0", even "NOL" is truthy but the first truthy that was found was "0"
console.info(0 || "NOL"); // Output: "NOL"
console.info(null || "NULL"); // "NULL"
console.info(undefined || "UNDEFINED"); // UNDEFINED
console.info(0 || false); // false, all falsy, took the last one

// In real project:
const person = {
  firstName: "", // No First Name
  lastName: "Putra", // We have last name here
};

const name = person.firstName || person.lastName; // We want to take the name either First Name or Last Name, so check if we got first name then use it, if no then use Last name
console.info(name);

// &&
console.info("HELLO" && ""); // ""
console.info("" && []); // ""
console.info("0" && "NOL"); // NOL
