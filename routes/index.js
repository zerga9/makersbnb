var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Makers BnB' });
});

router.get('/users/new', function(req, res, next) {
  res.render('sign_up_in', { title: 'Makers BnB' });
});

router.get('/property/new', function(req, res, next) {
  res.render('property', { title: 'Makers BnB' });
});

router.post('/property/new', function(req, res, next) {
  res.render('property', { title: 'Makers BnB' });
});

module.exports = router;
