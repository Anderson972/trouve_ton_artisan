const {Artisan, Specialite, Categorie} = require ('../models')



exports.getAll = async (req, res) => {

try {
   const artisans =  await Artisan.findAll({include: {
        model: Specialite,
        include: Categorie
    }});
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