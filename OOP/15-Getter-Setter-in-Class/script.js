// 'person' class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

// all these getter and setter will stick to the prototype, not the instance object
const rama = new Person("rama", "putra");
console.info(rama);
console.info(rama.fullName);

rama.fullName = "Budi Nugraha";
console.info(rama);
