var mongoose = require('mongoose');
const URI="mongodb+srv://dbUser:dbUser@cluster0-fb8bt.mongodb.net/<Order>?retryWrites=true&w=majority"

mongoose.connect(URI, {useNewUrlParser: true,useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("kết nối database thành công");
  // we're connected!
});

module.exports=mongoose