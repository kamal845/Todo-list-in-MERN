const {Router} = require('express');
const todoController=require('../controller/todoController');
const router=Router();
router.get('/get',todoController.getTodos);
router.post('/save',todoController.saveTodos);
router.put('/update/:id',todoController.updateTodos);
router.delete('/delete/:id',todoController.deleteTodos);
module.exports=router;