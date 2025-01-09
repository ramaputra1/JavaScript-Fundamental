// {
//   class Person {
//     #name;
//     #age;

//     constructor(name, age) {
//       this.#name = name;
//       this.#age = age;
//     }

//     info() {
//       return `Info: ${this.#name}, ${this.#age}`;
//     }
//   }

//   const person = new Person();
//   console.info(person.info);
// }

{
  class Rectangle {
    #width;
    #height;

    constructor(width, height) {
      this.#width = width;
      this.#height = height;
    }

    getArea() {
      return this.#height * this.#width;
    }

    displayInfo() {
      return `${this.#height} ${this.#width} ${this.getArea()}`;
    }
  }

  const rectangle = new Rectangle(7, 2);
  console.info(rectangle.displayInfo(7, 2));
}

//

var expect = function (val) {
  const valueExpect = 5;
  const valObj = val;

  const toBeObj = {
    value: toBe(),
  };

  const toBe = function (valObj) {
    if (valObj === valueExpect) {
      true;
    } else {
      ("Not Equal");
    }
    return toBeObj;
  };

  const NotToBe = function (valObj) {
    if (valObj !== valueExpect) {
      true;
    } else {
      ("Equal");
    }
    return toBeObj;
  };

  return;
};
