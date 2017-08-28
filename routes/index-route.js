var express = require('express');
var router = express.Router();
var controller = require('../controllers/index-controller');

router.get('/:query', controller.get);

module.exports = router;
