class Person {
  constructor(name) {
    this.nameAsProperty = name;
  }
}

const rama = new Person("Rama Putra"); // have parameter
console.info(rama.nameAsProperty); // that is why we have this property and can access rama.name and name as property // output name as Rama Putra
