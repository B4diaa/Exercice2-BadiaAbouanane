import Task from '../models/taskModelMongo.js';
import { getMongoCollection } from '../config/mongoClient.js';  

const taskModel = new Task();

export default class TaskControllerMongo {
    async listTasks(req, res) {
        try {
            const collection = await getMongoCollection('tasks');
            const tasks = await collection.find({}).toArray();
            res.json(tasks);
        } catch (err) {
            console.error('Erreur lors de la récupération des tâches :', err);
            res.status(500).json({ error: 'Erreur serveur' });
        }
    }

    async addTask(req, res) {
        console.log('Requête reçue :', req.body);
        const { title, description } = req.body;
        const collection = await getMongoCollection('tasks');
        if (!title || !description) {
            return res.status(400).json({ error: 'Title and description are required' });
        }
        const newTask = await collection.insertOne({ title, description });
        res.status(201).json(newTask);
    
    }

    async deleteTask(req, res) {
        const { id } = req.params;
        const collection = await getMongoCollection('tasks');
        const result = await collection.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(204).send();
    }
}
