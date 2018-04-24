var express     =   require("express");
var app         =   express();
var bodyParser  =   require("body-parser");
var router      =   express.Router();
var mongoOp     =   require("./model/mongo");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended" : false}));

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
