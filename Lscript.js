async function name() {
    try {
        const result = await Promise.reject(
            new Error("failded")
        );
    } catch (error) {
        console.log(error.message);
    }
}
name()
async function loadcar() {
    const car = await Promise.resolve("Lamborghini Aventador svj 63");
    return `${car} has delivered`
}
loadcar()
 .then((car) => console.log(car))
 .catch((error) => console.log(error.message));