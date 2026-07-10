const sequelize = require('../config/db');
const Artisan = require('./artisan');
const Specialite = require('./specialite');
const Categorie = require('./categorie');



Specialite.hasMany(Artisan, {foreignKey: 'fk_specialite_artisans'});
Artisan.belongsTo(Specialite, {foreignKey: 'fk_specialite_artisans'});

Categorie.hasMany(Specialite, {foreignKey : 'fk_categories_specialite'});
Specialite.belongsTo(Categorie, {foreignKey : 'fk_categories_specialite'});

module.exports = { sequelize, Categorie, Specialite, Artisan };