var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.get('/about', function (req, res) {
  res.send('get:About this wiki');
})

router.post('/about', function (req, res) {
  res.send('post:About this wiki');
})

module.exports = router;