const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');

const Categoria = sequelize.define("categoria", {
    id_categoria : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    nome_categoria : {
        type : DataTypes.STRING(100),
        allowNull : false,
        unique : true
    }

});

module.exports = Categoria;