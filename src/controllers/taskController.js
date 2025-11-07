import { DB_TYPE } from '../config/dbConfig.js';
import TaskControllerMongo from './taskControllerMongo.js';
import TaskControllerPg from './taskControllerPg.js';

let TaskController;

if (DB_TYPE === 'pg') {
  TaskController = new TaskControllerPg();
} else {
  TaskController = new TaskControllerMongo();
}

export default TaskController;
