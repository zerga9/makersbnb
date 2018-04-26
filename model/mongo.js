var mongoose    =   require("mongoose");
require("../config.js"); 
mongoose.connect(MONGO_URL);
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var propertySchema  = {
    "propertyName" : String,
    "propertyDetails" : String,
    "propertyPrice" : String
};
// create model if not exists.
module.exports = mongoose.model('properties',propertySchema);
