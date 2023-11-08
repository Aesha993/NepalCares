var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NepalCares' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'NepalCares' });
});

router.get('/discover', function(req, res, next) {
  res.render('discover', { title: 'NepalCares' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'NepalCares' });
});

module.exports = router;
