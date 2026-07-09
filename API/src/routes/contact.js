const express = require('express');
const router = express.Router();

const controllers = require('../controllers/contact');


router.post('/', controllers.sendForm);

module.exports = router;