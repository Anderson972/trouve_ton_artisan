

const apiKey = (req, res, next) => {
    const key = req.headers['x-api-key']
    const API_KEY = process.env.API_KEY

    if (key && key === API_KEY) {
        return next()
    }
    return res.status(401).json({message: 'Accès non autorisé'})
    
};

module.exports = apiKey;