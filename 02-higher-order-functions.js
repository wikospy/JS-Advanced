/*
 * HIGHER-ORDER FUNCTIONS
 *
 * A higher-order function accepts a function, returns a function, or both.
 * This is why array methods can accept your business rule as a callback.
 */

// Real-life use:
// A store can apply a different pricing rule to every product in a cart.
const prices = [10, 20, 30];

// map receives one price at a time, runs the arrow callback, and stores each
// returned value in a new array.
const withTax = prices.map((price) => price * 1.2);

// The result is [12, 24, 36].
console.log(withTax);

const productNames = ["pen", "notebook", "marker"];
const formattedNames = productNames.map((name) => name.toUpperCase());
console.log(formattedNames);

/*
 * Line-by-line runtime behavior:
 * - `prices.map(...)` starts an iteration.
 * - `price` receives 10, then 20, then 30.
 * - `price * 1.2` creates a number for each item.
 * - map collects those return values and returns a new array.
 *
 * Common mistakes:
 * - Forgetting to return from a block-bodied callback.
 * - Using map() only for side effects; use forEach() for intentional effects.
 * - Assuming map() changes the original array.
 *
 * Use higher-order functions to make transformations and policies reusable.
 * Do not create abstractions that hide a simple one-line operation.
 *
 * Challenge:
 * Write applyTwice(fn, value) that calls fn on value two times and returns
 * the final result. Test it with applyTwice(number => number + 3, 4).
 */
