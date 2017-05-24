const express = require('express');

const router = express.Router();
// eslint-disable-next-line
router.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// eslint-disable-next-line
router.get('/', function (req, res) {
  res.json({});
});

module.exports = router;

