class Person {
  #name;
  #age;
  info() {
    return `Info: ${this.#name}, ${this.#age}`;
  }
}

class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  info() {
    return `Info: ${this.#name}, ${this.#age}`;
  }
}

const person = new Person();
console.info(person.info);
