var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/makersbnb');
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
