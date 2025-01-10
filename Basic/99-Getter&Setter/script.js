{
  // use usual function
  const person = {
    firstName: "Rama",
    lastName: "Putra",
    fullName: function () {
      // it's an usual function
      return `${this.firstName} ${this.lastName}`;
    },
  };

  person.firstName = "Romo";
  console.info(person.fullName); // this one will access a function
  // but, we do not want it to be function, we need this as a property
}

{
  // getter
  const person = {
    firstName: "Rama",
    lastName: "Putra",
    get fullName() {
      // it's an usual function
      return `${this.firstName} ${this.lastName}`;
    },
  };

  person.firstName = "Romo";
  console.info(person.fullName);
  // now, fullName counted as property
}

{
  // getter
  const person = {
    firstName: "Rama",
    lastName: "Putra",
    get fullName() {
      // it's an usual function
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value) {
      // use set to modification the value
      const array = value.split(" ");
      this.firstName = array[0];
      this.firstName = array[1];
    },
  };

  person.fullName = "Assela Sutrisno"; // when we do not have setter, we are not allowed to change this

  person.firstName = "Romo";
  console.info(person.fullName);
  // now, fullName counted as property
}
