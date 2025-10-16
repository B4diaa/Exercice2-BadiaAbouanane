import Task from '../models/taskModel.js';


const taskModel = new Task();

export default class TaskController {
    static listTasks(req, res) {
        res.json(taskModel.getAll());
    }

    static addTask(req, res) {
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        const newTask = taskModel.create({ title, description });
        res.status(201).json(newTask);
    }

    static deleteTask(req, res) {
        const { id } = req.params;
        const success = taskModel.delete(id);
        if (!success) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    }
}