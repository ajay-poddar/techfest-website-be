var User = function(){
 /* Module Dependecies*/
  var mongoose = require('mongoose');
  var Schema   = mongoose.Schema;
  var ObjectId = mongoose.Schema.ObjectId;
  var path = require('path');
  var fs = require('fs');

  //Schema Defination
  userSchema = new Schema({
  	"userId" : {type:String, unique:true},
  	"name" : String,
  	"email" : String,
  	"eventId" : String,
  	"userType" : Boolean
  });

  mongoose.connect('mongodb://localhost/techfest');

  _userModel = mongoose.model("users",userSchema);

 _createUser = function(data,callback){
    console.log(data.body);
    _userModel.find({"userId" : data.body.userId},function(err,obj){
      if(obj){
        if(obj.length > 0)
        {
          console.log("User Exists!");
          callback(null,"User Already Exists!");
        }
        else
        {
          console.log("New User!");
          var user = new _userModel(data.body);
          user.save(callback);
        }
      }else{
        console.log("DB Error!");
      }
    });
  };

  return{
  	userModel : _userModel,
  	createUser : _createUser
  }


};

module.exports = User();