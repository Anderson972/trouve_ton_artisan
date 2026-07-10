const rateLimit = require('express-rate-limit');

const contactLimiter = rateLimit({
    windowMs: 20 * 60 * 1000, 
    max: 5,                    
    message: { message: 'limite de demandes atteinte, réessayez plus tard.' }
});

module.exports = contactLimiter;