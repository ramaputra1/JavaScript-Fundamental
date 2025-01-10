{
  // ussualy we do this:
  function sayHello(firstName, lastName) {
    document.writeln(`Hello ${firstName} ${lastName}`); // directly print it when we call it
  }
}

{
  // but here we gonna use return:
  function sayHello(firstName, lastName) {
    const valueToReturn = `Hello ${firstName} ${lastName}`; // instead of use document.writeln use variable to store it so we can use for any either print, console, alert etc
    return valueToReturn; // then return that, so it will return that value, if we do not return it will always be there without have anything to do
  } // *note: we can also return other function in return ..

  const catchTheReturn = sayHello("Rama", "Putra"); // we need to catch that first
  document.writeln(catchTheReturn); // then do something
}

// return keyword more than one:

{
  function getFinalValue(value) {
    if (value > 90) {
      return "A"; // 1st return
    } else if (value > 80) {
      return "B"; // 2nd return
    } else if (value > 70) {
      return "C"; // 3rd
    } else if (value > 60) {
      return "D"; // 4th
    } else {
      return "EEE"; // 5th
    }
  }

  const theValue = getFinalValue(95); // catch in variable to have the parameter as well
  document.writeln(`<p>${theValue}</p>`); // call
}

{
  // stop within the return keyword
  function isContains(array, searchValue) {
    for (const element of array) {
      // use for of to iterate the index in array
      if (element === searchValue) {
        return true; // if we found one, return true or in other word stop here.
      }
    }
    return false; // if no then go here, return false
  }

  const array = [1, 32, 4324, 3, 43, 53, 53, 43, 43, 535, 35, 5];
  const search = 43;
  const found = isContains(array, search);
  document.writeln(`<p>${found}</p>`);
}
