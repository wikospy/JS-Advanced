/*
 * PROMISES
 *
 * A Promise is an object representing future work. It starts pending and
 * becomes fulfilled with a value or rejected with a reason exactly once.
 */

// Real-life use:
// A login flow might wait for user data to load before showing the dashboard.
const delayedMessage = new Promise((resolve) => {
  // The executor runs immediately; the timer schedules later work.
  setTimeout(() => resolve("Loaded"), 300);
});

// then() registers a callback for fulfillment and returns another Promise.
delayedMessage.then((message) => console.log(message));

const userProfile = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isValid = true;
    if (isValid) {
      resolve({ name: "Asha", active: true });
    } else {
      reject(new Error("User profile failed to load"));
    }
  }, 400);
});

userProfile
  .then((user) => console.log(`Logged in as ${user.name}`))
  .catch((error) => console.log(error.message));

/*
 * The browser continues other work while the timer waits. After 300ms,
 * resolve fulfills the promise and the callback is queued as a microtask.
 *
 * Common mistakes:
 * - Forgetting to return a promise from a then callback.
 * - Handling success without handling rejection.
 * - Assuming a Promise makes synchronous code execute in parallel threads.
 *
 * Use Promises for fetches, timers, and other future results. Do not wrap
 * already-synchronous calculations in Promises without a real async boundary.
 *
 * Challenge:
 * Create a promise that rejects when a supplied number is negative, then
 * handle both .then() and .catch().
 */
