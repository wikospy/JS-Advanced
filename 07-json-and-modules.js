/*
 * JSON AND MODULES
 *
 * JSON is a text format for exchanging data. Modules split code into files
 * with explicit export/import boundaries.
 */

// Real-life use:
// A settings screen can save preferences as JSON and reload them later.
const settings = { theme: "dark", compact: true };

// JSON.stringify converts the object into text for storage or transport.
const text = JSON.stringify(settings);

// JSON.parse converts valid JSON text back into a new JavaScript value.
const restored = JSON.parse(text);

// Property access reads the restored object's theme.
console.log(restored.theme);

const cart = { items: [{ name: "Notebook", qty: 2 }], total: 18 };
const cartText = JSON.stringify(cart);
const cartFromStorage = JSON.parse(cartText);
console.log(cartFromStorage.items[0].name);

/*
 * JSON does not preserve functions, undefined, prototypes, or class identity.
 * Modules use `export { name }` to expose a value and `import { name } from
 * "./file.js"` to consume it. Browser module scripts are loaded with
 * <script type="module">.
 *
 * Common mistakes:
 * - Parsing already-parsed data.
 * - Assuming JSON.parse validates the application's data shape.
 * - Creating circular module dependencies.
 *
 * Use JSON at data boundaries, and modules to make dependencies explicit.
 * Do not use JSON as a replacement for validation or rich object behavior.
 *
 * Challenge:
 * Create formatter.js exporting formatCurrency and main.js importing it.
 * Run main.js from an HTML module script.
 */
