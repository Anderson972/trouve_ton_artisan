const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Categorie = sequelize.define(
    'Categorie',
    {
        id_categories: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom_categories: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
    },
    {
        tableName: 'categories',
        timestamps: false
    }
);

module.exports = Categorie;