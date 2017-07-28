const User = require('../models/users');
const async = require('async');
const resp = require('../config/responseMessage')
const universalfunction = require('../utils/middlewareFunction')
const bcrypt = require('bcrypt-nodejs')
const userType = require('../config/parameter')



exports.signUp = signUp;
exports.login = login;
exports.allUser = allUser;

function signUp(req, res) {
	var user_name = req.body.user_name;
	var email = req.body.email;
	var password = req.body.password;
	var user_type = req.body.user_type ? req.body.user_type : 2;
	async.auto({
		checkUserPresentOrNot: function (cb) {
			User.count({ 'user_name': user_name },function (err, userCount) {
				if (err) {
					console.log("there is some error in this particular query" , + err);
					cb(err);
				}else if (userCount == 1) {
                  console.log("User with same user name is present " + user_name);
				  cb(1);  
				}else{
					console.log("User with same user name is not present " + user_name);
			        cb(null,user_name);	
			}
				
			})
		},
		savedUserRaw: ['checkUserPresentOrNot', function (result, cb) {
			let hash_password = bcrypt.hashSync(password);
			var raw = new User({
				user_name: user_name,
				email: email,
				password: hash_password,
				user_type: user_type
			});
			raw.save(function (err, result) {
				if (err) {
					cb(err);
				} else {
					cb(null, result);
				}
			})
		}]

	}, function (err, result) {
		if (err) {
			if(err==1){
            console.log("there is some problem in saving data" + err);
			universalfunction.sendError(resp.ERROR.USER_ALREADY_REGISTERED,res); 
			}else{
			console.log("there is some problem in saving data" + err);
			universalfunction.sendError(resp.ERROR.ERROR_IN_QUERY,res);
			}	
	} else {
			console.log("successfully data store" + result);
			universalfunction.sendSuccess(resp.SUCCESS.REGISTERED,null,res);
		}
	})
}

function login(req,res){
	var user_name = req.body.user_name;
	var password = req.body.password;
	async.auto({
		checkUserNameAndPasswordIsValid:function(cb){
        User.find({'user_name':user_name},function(err,result){
			if(err){
				cb(err);
			}else{
			    if(result.length == 1){
                 let hash_password = result[0].password;  
				 if(bcrypt.compareSync(password, hash_password)){
                  console.log("login successfully");
				  let user_type = userType.userType[result[0].user_type];
				  let userData = {
					  user_id:result[0]._id,
					  user_name:result[0].user_name,
					  email:result[0].email,
					  user_type:user_type
				  }
	            //   console.log(session);
				//   req.session.user_id = result[0]._id;
                //   req.session.user_type = result[0].user_type;
				  cb(null,userData);
                 }else{
				   console.log("password not matched");
				   cb(resp.ERROR.INVALID_CREDENTIALS);	 
				 }
				}else{
	           console.log("user name not present");
			   cb(resp.ERROR.INVALID_USERNAME);			
				}	
		}
		}) 
		}
	},function(err,result){
		if(err){
			universalfunction.sendError(err,res);
		}else{
			universalfunction.sendSuccess(resp.SUCCESS.LOGGED_IN,result.checkUserNameAndPasswordIsValid,res);
		}
	})
}




function allUser(req,res){
	async.series({
       getAllUserDetails: function(cb){
			User.find({"user_type":2},{"_id":1,"user_name":1},function(err,result){
				if(err){
					cb(resp.ERROR.USER_NOT_FOUND);
				}else{
					cb(err,result);
				}
			})
		},
     
	},function(err,result){
		if(err){
	      universalfunction.sendError(err,res);		
		}else{
			universalfunction.sendSuccess(resp.SUCCESS.USER_FOUND,result.getAllUserDetails,res);
		}
	})
}