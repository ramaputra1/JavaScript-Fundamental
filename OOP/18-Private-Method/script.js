class Person {
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }

  #sayWithoutName() {
    console.info("Hello");
  }

  #sayWithName(name) {
    console.info(`Hello ${name}`);
  }
}

const eko = new Person();
eko.say("Joko");
// eko.#sayWithoutName(); // uncomment this // it will error because we force to call the PRIVATE method (use #)
