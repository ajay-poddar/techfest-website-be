var User = function(){
 /* Module Dependecies*/
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;
  var ObjectId = mongoose.Schema.ObjectId;
  var path = require('path');
  var fs = require('fs');

  //Schema Defination
  userSchema = new Schema({
  	"user-id" : {type:String, unique:true},
  	"name" : String,
  	"email" : String,
  	"event-id" : String,
  	"user-type" : Boolean
  });

  mongoose.connect('mongodb://localhost/techfest');

  _userModel = mongoose.model("users",userSchema);

  _createUser = function(data,callback){
  	console.log(data.body);
  	_userModel.find({"user-id" : data.body.userid},function(err,obj){
  		if(obj){
  			console.log("User Exists!");
  			callback(null,"User Already Exists!");
  		}else{
  			console.log("New User!");
  			var user = new _userModel(data.body);
  			user.save(callback);
  		}
  	});
  };

  return{
  	userModel : _userModel,
  	createUser : _createUser
  }


};

module.exports = User();