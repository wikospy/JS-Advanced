/*
 * ERRORS
 *
 * An Error represents a failed operation or violated input contract. Throwing
 * transfers control to the nearest matching catch boundary.
 */

// Real-life use:
// A profile form should reject invalid age or empty title values before saving.
function parseAge(value) {
  // Form values arrive as strings, so convert explicitly.
  const age = Number(value);

  // Reject NaN, decimals, and negative ages before returning bad data.
  if (!Number.isInteger(age) || age < 0) {
    throw new Error("Invalid age");
  }

  // A valid value returns normally to the caller.
  return age;
}

try {
  // "x" cannot become a valid integer, so parseAge throws.
  console.log(parseAge("x"));
} catch (error) {
  // The catch boundary turns the failure into visible diagnostic output.
  console.error(error.message);
}

function validateTitle(title) {
  if (typeof title !== "string" || title.trim() === "") {
    throw new Error("Title is required");
  }
  return title.trim();
}

try {
  console.log(validateTitle("   Complete the task   "));
  console.log(validateTitle(""));
} catch (error) {
  console.error(error.message);
}

/*
 * Common mistakes:
 * - Catching every error and silently continuing.
 * - Throwing strings instead of Error objects.
 * - Validating after rendering or saving invalid data.
 *essage. Do no
 * Throw near the invalid operation and catch where the UI can recover, retry,
 * or show a useful mt use exceptions for normal branching.
 *
 * Challenge:
 * Write validateTitle(title) that throws an Error for a non-string or empty
 * title, and test both a valid and invalid value.
 */ 

