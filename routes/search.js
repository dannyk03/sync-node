var express = require('express');
var router = express.Router();
var session = require('express-session');

router.get('/index', function(req, res, next) {
	res.render('pages-search', { title: 'Search' });
});
module.exports = router;