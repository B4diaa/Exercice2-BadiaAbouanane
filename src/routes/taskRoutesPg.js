import express from 'express';
import TaskControllerPg from '../controllers/taskControllerPg.js';

const router = express.Router();
const taskController = new TaskControllerPg();

router.use((req, res, next) => {
  console.log(`Requête reçue : ${req.method} ${req.url}`);
  next();
});


router.get('/', taskController.listTasks);
router.post('/', taskController.addTask);
router.delete('/:id', taskController.deleteTask);

export default router;


