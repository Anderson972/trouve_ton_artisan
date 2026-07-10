const {Categorie, Specialite} = require('../models')

exports.getAll = async (req, res) => {
    
    try {
        const categories = await Categorie.findAll({
            include: Specialite
        })
        return res.status(200).json(categories)
    } catch (error) {
        console.error("erreur lors de la recuperation des categories", error)
    return res.status(500).json({message : "erreur serveur categories"})
    }
};