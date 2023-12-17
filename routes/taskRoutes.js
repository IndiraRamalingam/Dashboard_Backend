const express=require('express')
const router=express.Router();
const taskController = require('../controllers/task/taskController')

//to get the ID of User
router.get('/getId',taskController.getUserID);

//to view all tasks
router.get('/getAll/:id',taskController.getAllTasks);

//to get task using ID
router.get('/getTask/:id',taskController.getTask);

//to add new task
router.post('/addTask/:id',taskController.addnewTask);

//to update status
router.put('/editStatus/:id',taskController.editStatus);

//to update task
router.put('/editTask/:id',taskController.editTask);

//to delete task
router.delete('/deleteTask/:id',taskController.deleteTask);

module.exports=router;