var express = require('express');
var router = express.Router();
var mongoOp     =   require("../model/propertyMongo");
var userMongoOp     =   require("../model/userMongo");

/* GET home page. */
router.get('/', function(req, res, next) {
  var response = {};
  mongoOp.find({},function(err,data){
  // Mongo command to fetch all data from collection.
    if(err) {
      response = {"error" : true,"message" : "Error fetching data"};
    } else {
      response = {"error" : false,"message" : data};
    }
    res.render('index', {
      title: 'Makers BnB',
      properties: response });
  });
});

router.get('/users', function(req, res, next) {
  var response = {};
  userMongoOp.find({},function(err,data){
  // Mongo command to fetch all data from collection.
    if(err) {
      response = {"error" : true,"message" : "Error fetching data"};
    } else {
      response = {"error" : false,"message" : data};
    }
    res.render('users', {
      title: 'Makers BnB',
      users: response });
  });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'Makers BnB' });
});

router.get('/users/new', function(req, res, next) {
  res.render('sign_up_in', { title: 'Makers BnB' });
});

router.post('/users/new', function(req, res, next) {
  // res.render('property', { title: 'Makers BnB' });
  var db = new userMongoOp();

  var response = {};
  // fetch data from REST request.
  // Add strict validation when you use this in Production.
  db.userName = req.body.userName;
  db.userEmail = req.body.userEmail;
  db.userPassword = req.body.userPassword;
  db.save(function(err){
  // save() will run insert() command of MongoDB.
  // it will add new data in collection.
      if(err) {
          response = {"error" : true,"message" : "Error adding data"};
      } else {
          response = {"error" : false,"message" : "Data added"};
      }
      // res.json(response);

      res.redirect('/properties');
    });
});

router.get('/property/new', function(req, res, next) {
  res.render('property', { title: 'Makers BnB' });
});

router.post('/property/new', function(req, res, next) {
  // res.render('property', { title: 'Makers BnB' });
  var db = new mongoOp();

  var response = {};
  // fetch data from REST request.
  // Add strict validation when you use this in Production.
  db.propertyName = req.body.propertyName;
  db.propertyDetails = req.body.propertyDetails;
  db.propertyPrice = req.body.propertyPrice;
  db.save(function(err){
  // save() will run insert() command of MongoDB.
  // it will add new data in collection.
      if(err) {
          response = {"error" : true,"message" : "Error adding data"};
      } else {
          response = {"error" : false,"message" : "Data added"};
      }
      // res.json(response);

      res.redirect('/properties');
    });
});

router.route("/properties")
  .get(function(req,res){
      var response = {};
      mongoOp.find({},function(err,data){
      // Mongo command to fetch all data from collection.
          if(err) {
              response = {"error" : true,"message" : "Error fetching data"};
          } else {
              response = {"error" : false,"message" : data};
          }
          res.render('properties', { title: 'Makers BnB', properties: response });
        });

  })
  .post(function(req,res){
    var db = new mongoOp();
    var response = {};
    // fetch data from REST request.
    // Add strict validation when you use this in Production.
    db.propertyName = req.body.propertyName;
    db.propertyDetails = req.body.propertyDetails;
    db.propertyPrice = req.body.propertyPrice;
    db.save(function(err){
    // save() will run insert() command of MongoDB.
    // it will add new data in collection.
        if(err) {
            response = {"error" : true,"message" : "Error adding data"};
        } else {
            response = {"error" : false,"message" : "Data added"};
        }
        res.json(response);
      });
});

module.exports = router;
