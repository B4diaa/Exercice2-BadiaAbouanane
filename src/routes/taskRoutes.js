import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/tasks', taskController.listTasks);
router.post('/tasks', taskController.addTask);
router.delete('/tasks/:id', taskController.deleteTask);

export default router;


