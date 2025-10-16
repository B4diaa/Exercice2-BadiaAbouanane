export default class TaskModel {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    getAll() {
        return this.tasks;
    }

    addTask({ title, description }) {
        const newTask = { id: this.currentId++, title, description, done: false };
        this.tasks.push(newTask);
        return newTask;
    }

    delete(id) {
        const index = this.tasks.findIndex(task => task.id === parseInt(id));
        if (index === -1) return false;
        this.tasks.splice(index, 1);
        return true;
    }
}