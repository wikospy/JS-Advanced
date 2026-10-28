let namee = prompt("Enter your name");
let agee = prompt("Enter your age");
let city = prompt("Where you live");
const user = {
    name: `${namee}`,
    age: `${agee}`,
    place: `${city}`,
    introduce() {
        return `Hi, I am ${this.name} and I am ${this.age} who lives in ${this.place}`
    },
}
console.log(user.introduce());