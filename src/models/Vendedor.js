const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');
const Vendedor = sequelize.define("vendedor", {
    id_vendedor : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    nome_vendedor : {
        type : DataTypes.STRING(100),
        unique : true,
        allowNull : false,
    },
    email_vendedor : {
        type : DataTypes.STRING(256),
        unique : true,
        allowNull : false,
    },
    senha_vendedor : {
        type : DataTypes.STRING(100),
        unique : true,
        allowNull : false,
    },
    cnpj_vendedor : {
        type : DataTypes.STRING(14),
        unique : true,
        allowNull : false,
    },
})


module.exports = Vendedor;


// CREATE TABLE vendedores(
// 	id_vendedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     nome_vendedor VARCHAR(100) NOT NULL,
//     email_vendedor VARCHAR(256) NOT NULL UNIQUE,
//     senha_vendedor VARCHAR(100) NOT NULL UNIQUE,
//     cnpj_vendedor VARCHAR(14) NOT NULL UNIQUE
// );