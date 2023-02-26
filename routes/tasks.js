const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasksController');

router.get("/tasks" , tasksController.getAllTasks);
router.get("/tasks/:id" , tasksController.getTaskByID);
router.post("/tasks",  tasksController.addTask);
router.put("/tasks/:id", tasksController.updateTask);
router.delete("/tasks/:id",  tasksController.deleteByID);


module.exports = router;