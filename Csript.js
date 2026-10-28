let input = prompt("Enter your name");
const user = {
    name: `${input}`,
    greet() {
        return `Hello, ${this.name}`;
    },
}
console.log(user.greet());
