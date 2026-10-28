/*
 * MEMORY AND PERFORMANCE
 *
 * JavaScript can reclaim objects that are no longer reachable. Frontend
 * performance is the amount of work and memory needed to respond and render.
 */

// Real-life use:
// A product search cache can keep recent results in memory, but it should not grow forever.
const cache = new Map();

function remember(key, value) {
  // This reference keeps value in the cache under key.
  cache.set(key, value);

  // Returning value lets the caller use the same result immediately.
  return value;
}

// The call stores 42, returns it, and prints it.
console.log(remember("answer", 42));

const maxCacheSize = 3;
function cacheResult(key, value) {
  if (cache.size >= maxCacheSize) {
    const firstKey = cache.keys().next().value;
    cache.delete(firstKey);
  }
  cache.set(key, value);
}

cacheResult("a", 1);
cacheResult("b", 2);
cacheResult("c", 3);
cacheResult("d", 4);
console.log([...cache.keys()]);

/*
 * Common retention sources include unbounded caches, forgotten event
 * listeners, active timers, and closures holding large objects.
 *
 * Common performance mistakes:
 * - Optimizing before measuring.
 * - Re-rendering or recalculating work unnecessarily.
 * - Blocking the main thread with large synchronous loops.
 *
 * Use profiling, bounded data, cleanup functions, and appropriate scheduling.
 * Do not sacrifice readable code for a speculative micro-optimization.
 *
 * Challenge:
 * Add a maximum cache size of three entries. Decide which entry is removed
 * when a fourth entry is added and explain that policy.
 */
