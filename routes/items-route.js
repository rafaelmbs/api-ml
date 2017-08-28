var express = require('express');
var router = express.Router();
var controller = require('../controllers/items-controller');

router.get('/:id', controller.getitem);

router.get('/:id/description', controller.getdescription);

module.exports = router;
