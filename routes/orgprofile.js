var express = require('express');
var router = express.Router();

router.get('/orgprofile',function(req,res,next){
    res.render('orgprofile',{title:'organisational profile'});
});



module.exports = router;


