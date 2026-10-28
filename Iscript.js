const number = 10;

const delayedMessage = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number > 0) {
            resolve(`${number}`);
        } else if(number < 0) {
            reject(new Error("No. is negative"));
        } else {
            reject(new Error("No. is zero"))
        }
    }, 400);
});
delayedMessage 
 .then((num) => console.log(`${num} is a positive number`))
 .catch((error) => console.log(error.message));

