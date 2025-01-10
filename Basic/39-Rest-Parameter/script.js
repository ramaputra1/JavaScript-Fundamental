// rest parameter
function sum(name, ...data) {
  // data is Rest Parameter
  let total = 0;
  for (const item of data) {
    // cause now data is array so we can use for of
    total += item;
  }
  document.writeln(`<p>Total ${name} is ${total}</p>`);
}

sum("Orance", 10, 20, 30, 40, 50, 60); // after "Orance" (first argument) then the next argument would be a rest parameter till so on
sum("Apple", 10, 20, 30, 40, 50, 60);
sum("Banana", 10, 20, 30, 40, 50, 60);

// spread syntax (convert array to rest parameter)

const values = [10, 10, 10, 10, 10]; // our values is array
sum("Test", ...values); // convert it like this
