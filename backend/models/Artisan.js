const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
    nom: DataTypes.STRING,
    spécialité: DataTypes.STRING,
    note: DataTypes.FLOAT,
    localisation: DataTypes.STRING,
    apropos: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    categorie: DataTypes.STRING,
    top: DataTypes.TINYINT
}, { timestamps: false });

module.exports = Artisan;