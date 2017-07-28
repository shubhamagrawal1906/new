var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');
var userValidator = require('../validator/users');

router.post('/signup',userValidator.signUpValidation,userController.signUp);
router.post('/login',userController.login);
router.post('/alluser',userController.allUser);

module.exports = router;
