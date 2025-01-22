class Person {
  constructor(name) {
    // create the constructor like this and have some parameter to call it because we can not use parameter in class
    console.info(`Person is ${name}`);
  }
}

const rama = new Person("Rama Putra"); // have parameter by our constructor earlier
console.info(rama);
