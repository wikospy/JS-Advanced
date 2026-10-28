function createIdGenerator() {
    let prefix = 0;
    return () => {
        prefix += 1;
        return `prefix${prefix}`
    };
}
const newID = createIdGenerator();
console.log(newID());
console.log(newID());
console.log(newID());
console.log(newID());