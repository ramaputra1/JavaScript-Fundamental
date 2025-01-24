const person = {
  firstName: "Eko",
  middleName: "Kurniawan",
  lastName: "Khannedy",
  address: {
    country: "Indonesia",
    city: "Subang",
  },
  hobbies: ["Coding", "Game", "Traveling"],
};

const json = JSON.stringify(person); // Object to String (JSON)
console.info(json);

const jsonObject = JSON.parse(json); // String (JSON) to Object
console.info(jsonObject);
