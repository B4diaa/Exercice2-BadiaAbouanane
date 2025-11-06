import express from 'express';
import TaskControllerMongo from '../controllers/taskControllerMongo.js';

const router = express.Router();

router.get('/', TaskControllerMongo.listTasks);
router.post('/', TaskControllerMongo.addTask);
router.delete('/:id', TaskControllerMongo.deleteTask);

export default router;
