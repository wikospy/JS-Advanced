function validatetitle(title) {
    if (typeof title !== "string" || title.trim() === "") {
        throw new Error("Title is required");
    }
    return title.trim();
}
try {
       console.log(validatetitle("   Complete the task   "));
       console.log(validatetitle(""));
} catch (error) {
       console.error(error.message);
}

/*
1. The function
function validateTitle(title) {
title is the value we're checking.

For example: validateTitle("Complete the task");    Here: title = "Complete the task"

2. The if
if (typeof title !== "string" || title.trim() === "") {

There are two checks.
Check 1                                                     Check 2
typeof title !== "string"                                   title.trim() === ""

Means:Is title NOT a string?                                Remember trim() removes spaces from the beginning/end.
Example:validateTitle(123);                                 So:"     ".trim()

typeof 123 → "number"                                       becomes:""

So:"number" !== "string"                                    Therefore:title.trim() === ""
→ true
Invalid.                                                    is true.

This catches empty titles like:
""
"     "

3. Why ||? means OR.
condition1 || condition2       So the title is invalid if:  NOT a string  OR  empty after trimming


4. throw new Error()                                                     5. return title.trim()
throw new Error("Title is required");                                    If the title is valid:

This says:Stop this function and report an error.                        return title.trim();

So if:validateTitle("");                                                 Example: validateTitle("   Complete the task   ");

the function reaches:throw new Error("Title is required");               Before:"   Complete the task   "
and stops.                                                               After trim():"Complete the task"

It does not reach the return.                                            So the function returns:"Complete the task"


6. Now the try                                                            7. catch
try {
    console.log(validateTitle("   Complete the task   "));                catch (error) {
    console.log(validateTitle(""));
    }                                                                     Because an error happened, JavaScript jumps to catch.
    
    try means:"Run this code, but if an error happens, handle it."            error contains the error information.
    
    First line                                                                error.message
     validateTitle("   Complete the task   ")
    
     is:Title is required
    Valid → returns:Complete the task                                       console.error(error.message);
So:Complete the task
gets printed.                                                               }

Second line :validateTitle("")
Empty → throw happens:

throw new Error("Title is required");
The try block stops there.


So final output is approximately:Complete the task
Title is required
The whole flow
validateTitle("   Complete the task   ")
            ↓
       Is it a string?
            ↓ YES
       trim() → "Complete the task"
            ↓
          return
            ↓
    console.log() prints it


validateTitle("")
       ↓
Is it a string? YES
       ↓
trim() → ""
       ↓
Invalid!
       ↓
throw Error
       ↓
catch
       ↓
"Title is required"
The 4 things to remember
typeof       → check the type
trim()       → remove outside spaces
throw        → create/raise an error
try/catch    → handle an error

This pattern is very common in forms, todo apps, login systems, APIs, and other input validation.
*/
