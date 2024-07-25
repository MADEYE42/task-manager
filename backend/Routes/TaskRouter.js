const { createTask, fetchAllTasks, updataTasks, deleteTasks } = require('../Controllers/TaskControllers');

const Router = require('express').Router();
//CRUD functionality
Router.get('/',fetchAllTasks)
Router.post('/',createTask)
Router.put('/:id',updataTasks)
Router.delete('/:id',deleteTasks)
module.exports= Router;