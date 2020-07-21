var mongoose = require('../db/dbconect');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email:String,
    password:String,
})
var UserModel = mongoose.model('User', userSchema);

module.exports=UserModel
    