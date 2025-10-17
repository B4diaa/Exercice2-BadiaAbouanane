import pool from '../config/db.js';

export default class TaskModel {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    async getAll() {
        try {
            const result = await pool.query('SELECT * FROM tasks');
            return result.rows;
        } catch (err) {
            console.error('Erreur lors de la récupération des tâches :', err);
            throw err;
        }
    }

    async addTask({ title, description }) {
        try {
            const result = await pool.query(
                'INSERT INTO tasks (title, description, done) VALUES ($1, $2, $3) RETURNING *',
                [title, description, false]
            );
            return result.rows[0];
        } catch (err) {
            console.error('Erreur lors de l’ajout de la tâche :', err);
            throw err;
        }
    }

    async getTaskById(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM tasks WHERE id = $1',
                [id]
            );
            return result.rows[0];
        } catch (err) {
            console.error('Erreur lors de la récupération de la tâche :', err);
            throw err;
        }
    }

    async deleteTask(id) {
        try {
            const result = await pool.query(
                'DELETE FROM tasks WHERE id = $1 RETURNING *',
                [id]
            );
            return result.rows[0];
        } catch (err) {
            console.error('Erreur lors de la suppression de la tâche :', err);
            throw err;
        }
    }
}
