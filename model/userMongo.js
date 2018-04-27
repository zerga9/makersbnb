var mongoose    =   require("mongoose");
require('../config.js');
mongoose.connect(MONGO_URL);
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "userName" : String,
    "userEmail" : String,
    "userPassword" : String
};

// create model if not exists.
module.exports = mongoose.model('users',userSchema);
