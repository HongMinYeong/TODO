const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/todos', controller.getTodos);
router.post('/todo', controller.postTodo);
router.delete('/todo/:id', controller.deleteTodo);

module.exports = router;
