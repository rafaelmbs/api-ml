var express = require('express');
var router = express.Router();
var controller = require('../controllers/categories-controller');

router.get('/:id', controller.get);

module.exports = router;
