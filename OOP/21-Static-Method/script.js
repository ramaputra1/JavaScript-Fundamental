class MathUtil {
  static sum(...numbers) {
    // static
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

// see here we do not need to make object first to access it, just use the class then the method to call it cause it already belongs to the class
const result = MathUtil.sum(1, 1, 1, 1, 1);
console.info(result);
