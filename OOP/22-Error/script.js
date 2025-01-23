class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      // we did it on purpose just to make if its === 0 it would be error
      throw new Error("Total parameter harus lebih dari 0"); // then, here we gonna 'throw' to trigger then use 'Error' class
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

console.info(MathUtil.sum()); // here check in console it will ERROR cause the length = 0
console.info("Eko"); // cause we got 1 error up here all the codes from here till below will not show up

const result = MathUtil.sum(1, 1, 1, 1, 1);
console.info(result);
