const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');

const Cliente = sequelize.define("clientes", {
    id : {
        type : DataTypes.INTEGER,
        allowNull : false,
        autoIncrement : true,
        primaryKey : true
    },
    nome : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    senha : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    cpf : {
        type : DataTypes.STRING,
        allowNull : false,
    }
})


module.exports = Cliente;