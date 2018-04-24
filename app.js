var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./model/mongo");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

router.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
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
          res.json(response);
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

app.use('/',router);

app.listen(3000);
console.log("Listening to PORT 3000");