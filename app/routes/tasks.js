var express = require('express');
var router = express.Router();

var taskController = require('../controllers/taskController');

router.post('/createtaskstage',taskController.createTaskStage);
router.post('/getallstaskstages',taskController.getAllTaskStages);
router.post('/updatetaskstagename',taskController.updateTaskStageName);
router.post('/createtask',taskController.createTask);
router.post('/changetaskstage',taskController.changeTaskStage);
router.post('/getalltasks',taskController.getAllTasks);
router.post('/getallusertasks',taskController.getAllUserTasks);
router.post('/createsubtask',taskController.createSubTask);

module.exports = router;
