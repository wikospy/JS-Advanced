/*
 * PROTOTYPES AND CLASSES
 *
 * Every ordinary object can delegate property lookup to another object called
 * its prototype. A class is readable syntax for creating objects with shared
 * prototype methods; it is not a separate inheritance mechanism.
 */

// Real-life use:
// A task manager can create many task objects that all share the same behavior.
class Task {
  // The constructor runs when code uses new Task(...).
  constructor(title) {
    // `this` is the newly created Task instance.
    this.title = title;
  }

  // This method is stored on Task.prototype and shared by instances.
  describe() {
    return `Task: ${this.title}`;
  }
}

// new creates an object, links it to Task.prototype, and runs the constructor.
const studyTask = new Task("Study");

// JavaScript finds describe on the instance or then on its prototype.
console.log(studyTask.describe());

class  Task {
  constructor(title, owner) {
    this.title = title;
    this.owner = owner;
    this.completed = false;
  }

  complete() {
    this.completed = true;
    return `${this.title} completed by ${this.owner}`;
  }
}

console.log(new Task("Ship feature", "Asha").complete());

/*
 * Common mistakes:
 * - Thinking each instance owns a separate copy of every method.
 * - Forgetting new when calling a class.
 * - Using a class for plain API data that needs no behavior.
 *
 * Use classes when instances share domain behavior and lifecycle rules.
 * Prefer plain objects and functions for simple data transformations.
 *
 * Challenge:
 * Add a completed boolean initialized to false and a complete() method that
 * changes it to true. Explain which values live on the instance.
 */
