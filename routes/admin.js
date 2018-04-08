var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/', function(req, res, next) {
  res.sendFile('/views/index.html', { root: '.' });
});

router.post('/', function(req, res, next) {
	
  res.sendFile('/views/index.html', { root: '.' });
});
module.exports = router;
