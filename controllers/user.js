var user = require('../models/user');
exports.create_user = function(req,res){
	console.log("Create User Api Called!");
	user.createUser(req,function(err,obj){
		console.log(err);
		console.log(obj);
		if(!err)
			res.send(200,{"user" : obj});
		else
			res.send(400,{"user" : err});
	});
};