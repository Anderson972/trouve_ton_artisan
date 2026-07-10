const express = require('express');
const router = express.Router();

const controllers = require('../controllers/artisans');

router.get('/', controllers.getAll);
router.get('/top', controllers.getTop);
router.get('/:id', controllers.getById);

module.exports = router