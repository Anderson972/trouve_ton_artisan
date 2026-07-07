const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Artisan = sequelize.define(
  'Artisan',
  {
    id_artisans: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nom: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    note: {
        type: DataTypes.DECIMAL(2,1),
        allowNull: false,
    },
    ville: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    about: {
        type: DataTypes.STRING(255),
    },
    mail: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    site: {
        type: DataTypes.STRING(100),
    },
    top: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    fk_specialite_artisans: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  },
  {
    tableName: 'artisans',
    timestamps: false
  }
);

module.exports = Artisan;
