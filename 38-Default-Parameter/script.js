function register(name, gender = "UNKNOWN") {
  // in gender we give it default parameter as "UNKNOWN" it means when we do not have any parameter to input it will automatically have value as "UNKNOWN"
  console.info(name);
  console.info(gender);
}

register(); // undefined, UNKNOWN
register("Rama"); // Rama, UNKNOWN
register("Rama", "MALE"); // Rama, Male
register("Rama", undefined); // Rama, UNKNOWN // if it's undefined then still gonna use the default parameter
register("Rama", null); // Rama, Undefined
