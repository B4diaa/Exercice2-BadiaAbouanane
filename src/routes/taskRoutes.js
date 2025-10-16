import express from 'express';
import taskController from '../controllers/taskController.js';

const router = express.Router();

router.get('/', taskController.listTasks);
router.post('/', taskController.addTask);
router.delete('/:id', taskController.deleteTask);

export default router;


