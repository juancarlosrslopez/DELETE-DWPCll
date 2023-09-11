var express = require('express');
var router = express.Router();

// GET /users
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /users/author
router.get('/author', function(req, res, next) {
  res.render('author', {author: "Juan Carlos & Luis Guzman"});
});

module.exports = router;
