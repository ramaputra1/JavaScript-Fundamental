const data = {
  // the object "data"
  name: "Rama",
  age: "22",
  gender: "Male",
};

// for (variableName in object)
for (const eachData in data) {
  // eachData here is for the variable storage to storing the for in so we can call it by that variable
  document.writeln(`<p>${eachData}</p>`);
}
