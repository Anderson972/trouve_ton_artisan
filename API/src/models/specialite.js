const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const Specialite = sequelize.define(
    'Specialite',
    {
        id_specialite: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nom_specialite: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        fk_categories_specialite: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        tableName: 'specialite',
        timestamps: false
    }
);

module.exports = Specialite;