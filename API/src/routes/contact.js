const express = require('express');
const router = express.Router();

const controllers = require('../controllers/contact');
const contactLimiter = require('../middlewares/limiter')


router.post('/', contactLimiter, controllers.sendForm);

module.exports = router;