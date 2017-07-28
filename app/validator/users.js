const resp = require('../config/responseMessage')
const universalfunction = require('../utils/middlewareFunction')
const Joi = require('joi');


exports.signUpValidation = signUpValidation;

function signUpValidation(req,res,next){
var user_name = req.body.user_name;
	var email = req.body.email;
	var password = req.body.password;
	var user_type = req.body.user_type ? req.body.user_type : 2;

const schema = Joi.object().keys({
    user_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    user_type: Joi.number().integer().min(1).max(2).required()
})
Joi.validate({ user_name: user_name, email: email,password:password,user_type:user_type }, schema, function (err, result) {
if(err){
    console.log("validator");
    console.log(err);
}else{
    console.log("validator result");
    console.log(result);
		next();
}
})

}
