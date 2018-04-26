var mongoOp = require("../model/mongo");
// util.inherits(mongo);

var Schema = mongoOp.mongoose.Schema;

var propertySchema  = new Schema({
    "propertyName" : String,
    "propertyDetails" : String,
    "propertyPrice" : String
});

var TestModel = mongoOp.mongoose.model('properties', propertySchema);

describe('Create a instance of testModel', function() {
	beforeEach(function() {
		mongoOp.mongoose.connect('mongodb://mozl:makersbnb123@ds155699.mlab.com:55699/makersbnb');
	});

	afterEach(function() {
		mongoOp.mongoose.connection.db.executeDbCommand({
			dropDatabase: 1
		}, function(err, result) {
			console.log(err);
			console.log(result);
			process.exit(0);
		});
	});

	it('should save to the database', function() {
		var testModel = new TestModel();
		testModel.propertyName = 'Makers Academy';
		testModel.propertyDetails = 'Good location close to Hipster Central';
    testModel.propertyPrice = '£8,000';
		testModel.save(function(err) {
			expect(err).toBeNull();
			TestModel.find(function(err, result) {
				expect(result.length).toBe(1);
				expect(result[0].propertyName).toBe('Makers Academy');
        expect(result[0].propertyPrice).toBe('£8,000');
				expect(result[0].propertyDetails).toBe('Good location close to Hipster Central');
				asyncSpecDone();
			});
		});
		asyncSpecWait();
	});
});
