import express from 'express';
import TaskControllerPg from '../controllers/taskController.js';
import TaskControllerMongo from '../controllers/taskControllerMongo.js';
import { DB_TYPE } from '../config/dbConfig.js';

const router = express.Router();

const TaskController = DB_TYPE === 'mongo' ? new TaskControllerMongo() : new TaskControllerPg();

router.get('/', TaskController.listTasks);
router.post('/', TaskController.addTask);
router.delete('/:id', TaskController.deleteTask);

export default router;
