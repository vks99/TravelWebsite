var mongoose = require ('mongoose'); 

var Schema = mongoose.Schema; 

userSchema = new Schema ({
	name : String,
	phone : String,
	email : String,
	password:String,
	address:String,
	user_name:String,
});

module.exports = mongoose.model('user', userSchema);