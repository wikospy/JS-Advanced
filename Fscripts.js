const topics = ["js", "dom", "js", "css", "dom"];

const counts = new Map();

topics.forEach(topic => {
    if (counts.has(topic)) {
        counts.set(topic, counts.get(topic) + 1);
    } else {
        counts.set(topic, 1);
    }
});

console.log(counts);
/*Ab ek-ek line
const counts = new Map();

Ek empty Map banaya:Map {}

topics.forEach(topic => {

Array ke har item par kaam hoga.

Pehli baar:
topic = "js"
if (counts.has(topic)) {

Check:Kya "js" already Map mein hai?
Pehli baar nahi.

Isliye else:counts.set(topic, 1);

Map:js → 1

Next "dom":dom already hai? ❌
So:
js  → 1
dom → 1

Next "js":Ab "js" already hai ✅
counts.get(topic)

means:"js" ki current value kya hai?
Answer:1

Then:counts.set(topic, counts.get(topic) + 1);
means:1 + 1 = 2

Map:
js → 2
dom → 1

Then "css":
css → 1

Then last "dom":
dom → 2
Final:
js  → 2
dom → 2
css → 1

The three Map methods you need to remember:

counts.has(key)   // kya key exists karti hai?
counts.get(key)   // key ki value kya hai?
counts.set(key, value) // value add/change karo

Bas ye 3 methods samajh lo, Map counting ka logic clear ho jayega.*/