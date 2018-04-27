var mongoose    =   require("mongoose");
mongoose.connect('mongodb://mozl:makersbnb123@ds155699.mlab.com:55699/makersbnb');
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
