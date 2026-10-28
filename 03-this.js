/*
 * `this` is a context value used by a function. For normal methods, the
 * call-site determines it. Arrow functions do not create their own `this`;
 * they capture it from the surrounding scope.
 */

// Real-life use:
// In a user profile object, `this` helps a method refer to the current user's data.
const user = {
  // This property stores a string on the object.
  name: "Asha",

  // Method shorthand creates a normal function stored under `greet`.
  greet() {
    // In user.greet(), `this` refers to user, so this.name is "Asha".
    return `Hi, ${this.name}`;
  },
};

// The object-reference call supplies user as the method receiver.
console.log(user.greet());
//bind ()
const userb = {
    name: "Wiko",

    greet() {
        return `Hello, ${this.name}`;
    }
};

const sayHello = userb.greet.bind(userb);

console.log(sayHello());

const cart = {
  items: ["book", "pen"],
  showItems() {
    return this.items.map((item) => `- ${item}`);
  },
};

console.log(cart.showItems());

/*
 * If we write const detached = user.greet; detached(), the receiver is no
 * longer user. In strict-mode modules, `this` may be undefined.
 *
 * Common mistakes:
 * - Assuming `this` means the object where the function was originally
 *   written.
 * - Using an arrow as an object method when a dynamic receiver is needed.
 * - Passing a method as a callback without binding or wrapping it.
 *
 * Use methods when behavior belongs to an object. Use arrows for callbacks
 * when you want surrounding `this`. Do not use `this` when a plain function
 * argument makes the dependency clearer.
 *
 * Challenge:
 * Detach user.greet and make it work safely. Try both bind() and an arrow
 * wrapper, then explain the difference.
 */
