/*
 * EVENT LOOP
 *
 * JavaScript runs synchronous code on a call stack. The browser schedules
 * timer callbacks as tasks and Promise callbacks as microtasks. After the
 * current stack ends, microtasks run before the next task.
 */

// Real-life use:
// A loading spinner can appear immediately while an API response is waiting in the queue.
console.log("A");

setTimeout(() => console.log("task"), 0);

Promise.resolve().then(() => console.log("microtask"));

console.log("B");

// Output order: A, B, microtask, task.

const log = () => console.log("rendered");
setTimeout(log, 0);
Promise.resolve().then(() => console.log("data ready"));
console.log("waiting");

/*
 * A zero-millisecond timer is not immediate; it only becomes eligible later.
 * Too many microtasks can delay rendering and user input.
 *
 * Use the event loop model to explain loading indicators, timers, and async
 * ordering. Do not use arbitrary timeouts to "fix" a race condition.
 *
 * Challenge:
 * Add a second Promise callback and a second timer. Predict the complete
 * output before running it, then explain the observed order.
 */
