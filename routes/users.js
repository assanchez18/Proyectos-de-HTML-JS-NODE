var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Express'} )
  //res.send('respond with a resource');//esta es la respuesta al acceder a esa url

});

module.exports = router;
