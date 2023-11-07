var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NepalCares' });
});

router.get('/',function(req,res,next){
  res.render('signuppage',{title:'Home up'});
});


module.exports = router;
