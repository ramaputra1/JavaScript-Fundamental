// our own validationError class that extends error class
class ValidationError extends Error {
  constructor(message, field) {
    // the paramter for constructor
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError("The parameter must more than 0", "numbers"); // 'numbers' is additional information
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathUtil.sum());
  console.info("Eko");
} catch (error) {
  if (error instanceof ValidationError) {
    // if we catch something error from the field then show it
    console.info(
      `Terjadi error di field ${error.field} dengan error ${error.message}`
    );
  } else {
    console.info(`Terjadi error : ${error.message}`); // if not from it, so yea just the message (default property remember(?))
  }
} finally {
  console.info("Program selesai");
}

console.info("Khannedy");
