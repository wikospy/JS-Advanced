/*
 * SCOPE AND CLOSURES
 *
 * Scope answers: "Where can this name be read?" `let` and `const` are
 * block-scoped. A closure is a function plus the surrounding lexical
 * environment that it remembers.
 *
 * Why this exists in frontend code:
 * Components and event handlers often need private state. A closure lets us
 * keep that state private instead of placing it on the global object.
 */

// Real-life use:
// A shopping cart can keep a private item count without exposing it globally.
function createCounter() {
  // This binding exists only inside this invocation of createCounter().
  let count = 0;
  // The arrow function is created now but is not called yet.
  return () => {
    // The callback can still find `count` through its lexical environment.
    count += 1;

    // Returning exposes the current number, not the private binding itself.
    return count;
  };
}

// Calling the factory creates one new private `count` binding.
const nextCount = createCounter();

// Each call enters the closure, changes the same remembered binding, and
// returns it. The output is 1 2, not 1 1.
console.log(nextCount(), nextCount());

function createCartCounter() {
  let itemCount = 0;

  return () => {
    itemCount += 1;
    return `Cart has ${itemCount} items`;
  };
}

const cartCounter = createCartCounter();
console.log(cartCounter());
console.log(cartCounter());

/*
 * What the JavaScript engine does:
 * 1. It creates the function declaration.
 * 2. createCounter() creates an execution context containing count.
 * 3. The returned function keeps that context reachable.
 * 4. Garbage collection cannot remove count while nextCount can use it.
 *
 * Common mistakes:
 * - Using a global variable when state should be private.
 * - Expecting two factory calls to share state; each call gets its own count.
 * - Accidentally capturing a changing loop variable with the wrong scope.
 *
 * Use closures for factories, event handlers, and controlled private state.
 * Do not retain huge objects in long-lived closures without a reason.
 *
 * Challenge:
 * Create createIdGenerator(prefix), returning a function that produces
 * "prefix-1", "prefix-2", and so on. Attempt it before asking AI.
 */
