class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }

  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.info(counter.get());

counter.counter = 100; // this is fine
// counter.#counter = 100; // uncomment this // when you change it the private it will error

console.info(counter);
