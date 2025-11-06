import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

export default class TaskModelMongo {
    async getAll() {
        try {
            const tasks = await Task.find();
            return tasks;
        } catch (err) {
            console.error('Erreur lors de la récupération des tâches :', err);
            throw err;
        }
    }

    async addTask({ title, description }) {
        try {
            const newTask = new Task({ title, description });
            const savedTask = await newTask.save();
            return savedTask;
        } catch (err) {
            console.error('Erreur lors de l’ajout de la tâche :', err);
            throw err;
        }
    }

    async getTaskById(id) {
        try {
            const task = await Task.findById(id);
            return task;
        } catch (err) {
            console.error('Erreur lors de la récupération de la tâche :', err);
            throw err;
        }
    }

    async deleteTask(id) {
        try {
            const deletedTask = await Task.findByIdAndDelete(id);
            return deletedTask;
        } catch (err) {
            console.error('Erreur lors de la suppression de la tâche :', err);
            throw err;
        }
    }
}