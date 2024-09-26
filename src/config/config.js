const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("ecommerceexclusive", "root", "root", {
    host : "localhost",
    dialect : "mysql"
})


module.exports = sequelize