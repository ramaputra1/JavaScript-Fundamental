// 'configuration' class
class Configuration {
  static name = "Belajar JavaScript OOP"; // static
  static version = 1.0; // static
  static author = "Eko Kurniawan"; // static
} // if you check it on the console it will stick to the prototype

// ACTUALLY: we do not need to make an object anymore to access it
const config = new Configuration();
console.info(config);

Configuration.author = "Eko Khannedy"; // just call like it will works because it already belongs to the class

console.info(Configuration.name); // just check from the class
console.info(Configuration.version);
console.info(Configuration.author);
