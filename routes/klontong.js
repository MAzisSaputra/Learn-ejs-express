var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('klontong/index', { title: 'Page Baru' });
});

module.exports = router;
