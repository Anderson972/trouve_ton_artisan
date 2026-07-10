const {Artisan, Specialite, Categorie} = require ('../models')
const { Op } = require('sequelize');


exports.getAll = async (req, res) => {

    const filtre = {}
    const filtre_cat = {}
    try {

    if(req.query.id_specialite){
        filtre.fk_specialite_artisans = req.query.id_specialite
    }
    if(req.query.nom){
        filtre.nom = {[Op.like]:'%'+req.query.nom+'%'} 
    }
    if(req.query.id_categories){
        filtre_cat.fk_categories_specialite = req.query.id_categories
    }

    const includeSpecialite = {model : Specialite, include: Categorie}
    if (Object.keys(filtre_cat).length>0) {
        includeSpecialite.where = filtre_cat
    }


    const artisans =  await Artisan.findAll({
        where: filtre,
        include: includeSpecialite
    });
        return res.status(200).json(artisans)
    } catch (error) {
        console.error("erreur lors de la recuperation des artisans", error)
        return res.status(500).json({message : "erreur serveur artisans"})
    }
};

exports.getById = async (req, res) => {

    const pk = parseInt(req.params.id)

    try {
        const artisan = await Artisan.findByPk(pk, {include: {
        model: Specialite,
        include: Categorie
    }})
        if (artisan === null) {
            return res.status(404).json({message: 'Artisan non trouvé'})
        }
        return res.status(200).json(artisan)
    } catch (error) {
        console.error("erreur lors de la recuperation de l'artisan", error)
        return res.status(500).json({message : "erreur serveur artisan"})
    }
};

exports.getTop = async (req, res) => {

try {
    const artisans =  await Artisan.findAll({
        where: {
            top: 1
        },
        include: {
            model: Specialite,
            include: Categorie
        },
        limit: 3
    });
    return res.status(200).json(artisans);
} catch (error) {
    console.error("erreur lors de la recuperation du top artisans", error)
    return res.status(500).json({message : "erreur serveur top artisans"})
}
};