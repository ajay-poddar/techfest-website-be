var express = require('express');
var router = express.Router();
var user = require('../controllers/user.js');

/* GET home page. */
router.post('/login', user.create_user);

router.get('/logout', function(req, res) {
  console.log("Logout API Called!");
  res.send('Logout API Called');
});

router.get('/session', function(req, res) {
  console.log("Session API Called!");
  res.send('Session API Called');
});

module.exports = router;