async function addValues() {
    const a = await Promise.resolve(20);
    const b = await Promise.resolve(10);
    return a + b;
}
addValues().then((num) => console.log(`the sum is ${num}`));

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function admin() {
    await delay(2000)
    const passkey = await Promise.resolve("me");
    const email = await Promise.resolve("tt");
    if(passkey === "me" && email === "tt") {
        return `${login()}`
    } else if (passkey === "me") {
        return `Please enter email correctly`;
    } else if (email === "tt") {
        return `Please enter password correctly`;
    } else {
        return new Error("something wrong");
    }
}
admin()
 .then((user) => console.log(user))
 .catch((error) => console.log(error.message));

function login() {
    return `Hello Admin`;
}