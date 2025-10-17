import express from 'express';
import TaskController from '../controllers/taskController.js';

const router = express.Router();
const taskController = new TaskController();

router.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  next();
});


router.get('/', taskController.listTasks);
router.post('/', taskController.addTask);
router.delete('/:id', taskController.deleteTask);

export default router;


