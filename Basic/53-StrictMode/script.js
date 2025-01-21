function strictMode() {
  // "use strict"; // uncomment this
  const person = {
    firstName: "Rama",
  };

  with (person) {
    // can't use with in strict mode
    console.info(firstName);
  }
}

strictMode();
