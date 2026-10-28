/*
 * ASYNC/AWAIT
 *
 * async/await is syntax for consuming Promises in a readable, sequential
 * style. It does not block the browser's main thread.
 */

// Real-life use:
// A dashboard can wait for user details and then render the profile page.
async function readValue() {
  // Promise.resolve creates an already-fulfilled Promise containing 42.
  const value = await Promise.resolve(42);

  // await resumes this function with the fulfilled value, then returns 84.
  return value * 2;
}

// Calling an async function always returns a Promise, so use then or await.
readValue().then((result) => console.log(result));

async function loadProfile() {
  const user = await Promise.resolve({ name: "Asha", id: 10 });
  return `Profile loaded for ${user.name}`;
}

loadProfile().then((message) => console.log(message));

/*
 * Errors from awaited Promises can be handled with try/catch inside another
 * async function. Independent requests can use Promise.all for concurrency.
 *
 * Common mistakes:
 * - Forgetting that an async function returns a Promise.
 * - Awaiting independent work one by one unnecessarily.
 * - Omitting cancellation for stale browser requests.
 *
 * Use await when the next step depends on the previous result. Use
 * Promise.all when independent work can proceed together.
 *
 * Challenge:
 * Write an async function that awaits two values and returns their sum.
 * Add try/catch around a deliberately rejected Promise.
 */
