function applyTwice(fn, value) {
    let result = fn(value);
    result = fn(result);
    return result;
}

console.log(applyTwice(number => number + 3, 4));
/*
Let's break it down line by line.

function applyTwice(fn, value) {
1. Creating the function
It accepts two things: fn value 

Think of them as empty boxes.

applyTwice(number => number + 3, 4)

the boxes become: fn    → number => number + 3

value → 4

let result = fn(value);

This is the most important line.

fn contains a function:number => number + 3

value contains:4

So:fn(value) becomes:fn(4)

which means:4 + 3

which gives:7

So now:result contains: 7

result = fn(result);

Now we use the same function again.

Currently:result = 7

So:fn(result)

becomes:fn(7)

The function says:number + 3

so:7 + 3 = 10

Now:result = 10

That's why it's called applyTwice.
The function gets applied:4 → 7 → 10
return result;

function add(a, b) {
    return a + b;
}

function something(fn) {
    fn();
}

Here, fn isn't a number or string.
fn is itself a function.

That's called a higher-order function, and it takes some time for this to click.
Don't memorize the answer to this challenge. Make sure this mental model sticks:
A function can be stored in a variable/parameter and then called using ().
*/