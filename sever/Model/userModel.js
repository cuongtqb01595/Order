var mongoose = require('../conpig/dbconect');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email:String,
    password:String,
    role:{
        type:String,
        default:"user"
    }
})
var UserModel = mongoose.model('User', userSchema);

module.exports=UserModel
    