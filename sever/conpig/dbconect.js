var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vue', {useNewUrlParser: true,useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("kết nối database thành công");
  // we're connected!
});

module.exports=mongoose