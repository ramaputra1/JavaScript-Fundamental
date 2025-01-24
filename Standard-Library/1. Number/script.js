{
  // parsing
  const input = "12345";
  const number = Number(input);

  console.info(typeof input);
  console.info(typeof number);
  console.info(number);

  console.info(Number("salah")); // output: NaN
}

// properties
console.info(Number.MIN_VALUE); // Minimum
console.info(Number.MAX_VALUE); // MAx
console.info(Number.MIN_SAFE_INTEGER); // The most safe, go till here only
console.info(Number.MAX_SAFE_INTEGER); // The most safe, go till here only
console.info(Number.NaN);

// Method
const data = Number("eko");
console.info(Number.isInteger(data)); // is it Integer
console.info(Number.isNaN(data)); // is it NaN?

// Instance Method // from the Instance's number
const value = Number("12345");
console.info(value.toString(2)); // string Binary
console.info(value.toLocaleString("id-ID")); // code
console.info(value.toLocaleString("en-US"));
