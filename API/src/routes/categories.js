const express = require('express');
const router = express.Router();

const controllers = require('../controllers/categories');

router.get('/', controllers.getAll);


module.exports = router