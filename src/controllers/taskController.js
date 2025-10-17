import Task from '../models/taskModel.js';

const taskModel = new Task();

export default class TaskController {
    async listTasks(req, res) {
        try {
            const tasks = await taskModel.getAll();
            res.json(tasks);
        } catch (err) {
            console.error('Erreur lors de la récupération des tâches :', err);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    }

    async addTask(req, res) {
        console.log('Requête reçue :', req.body);
        const { title, description } = req.body;
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        const newTask = await taskModel.addTask({ title, description });
        res.status(201).json(newTask);
        
        

    }

    async deleteTask(req, res) {
        const { id } = req.params;
        const success = await taskModel.deleteTask(id);
        if (!success) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    }
}