class Task{
    constructor(name) {
        this.name = name;
        this.complete = false;

    }
    completed() {
        return this.complete = true;
    }
}
const task = new Task("Study");
console.log(task.complete);
task.completed();
console.log(task.complete);