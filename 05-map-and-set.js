/*
 * Map stores key/value pairs. Set stores unique values. They solve different
 * problems from arrays and plain objects.
 */

// Real-life use:
// A web app can keep page visit counts in a Map and unique tag names in a Set.
const visits = new Map([["home", 3]]);

// set() adds or replaces the value for a key and returns the Map.
visits.set("about", 1);
visits.set("contact", 2);
console.log(visits.get("home"));
console.log(visits.get("about"));

const pageViews = new Map([
  ["home", 120],
  ["shop", 89], 
  ["checkout", 45],
]);
console.log(pageViews.get("shop"));

// Set removes duplicate "js" while preserving insertion order.
const tags = new Set(["js", "js", "dom"]);
const uniqueSkills = new Set(["html", "css", "js", "html"]);
console.log([...tags], [...uniqueSkills]);

/*
 * Map can use objects as keys and has size, has(), get(), set(), and delete().
 * Set has add(), has(), delete(), and size. Both preserve insertion order.
 *
 * Common mistakes:
 * - Reading a missing Map key without handling undefined.
 * - Expecting Set to sort values; it only removes duplicates.
 * - Using an object when arbitrary key types or frequent lookup are needed.
 *
 * Use Map for lookup tables and Set for membership/uniqueness. Use arrays when
 * order and repeated values are the main meaning.
 *
 * Challenge:
 * Count the occurrences of ["js", "dom", "js", "css", "dom"] with a Map.
 */
