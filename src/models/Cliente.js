const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');

// Ver a forma certa de "importar" a tabela do mysql
const Cliente = sequelize.define("clientes", {
    id_cliente : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    nome_cliente : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email_cliente : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    senha_cliente : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    cpf_cliente : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    }
})


module.exports = Cliente;