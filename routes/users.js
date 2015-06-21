var express = require('express');
var router = express.Router();
// var app = require('../app');

module.exports = function(app){
  /* GET users listing. */
  router.get('/', function(req, res, next) {
    console.log(app.oauth.grant);
    res.send('respond with a resource');
  });
  return router;
}
// module.exports = router;
