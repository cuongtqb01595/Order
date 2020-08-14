var mongoose = require('../conpig/dbconect');
var Schema = mongoose.Schema;
var dataSchema = new Schema({
    amount:Number,
    session:String,
    place:String,
    name:String,
    gender:String,
    date:String,
    choose:String,
    request:String,
    source:String,
    totalPrice:Number
})
var DataModel = mongoose.model('Data', dataSchema);

module.exports=DataModel