var express = require('express');
var router = express.Router();
var app = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(app.oauth.grant); // should print [Function]
  res.send('respond with a resource');
});

module.exports = router;
