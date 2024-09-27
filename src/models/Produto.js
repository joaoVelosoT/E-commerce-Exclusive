const sequelize = require('../config/config');
const {DataTypes} = require('sequelize');
const Vendedor = require('./Vendedor');
const Categoria = require('./Categoria');

const Produto = sequelize.define('produto', {
    id_produto : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    nome_produto : {
        type : DataTypes.STRING(100),
        allowNull : false,
    },
    descricao_produto : {
        type : DataTypes.STRING(1000),
        allowNull : false
    },
    preco_produto : {
        type : DataTypes.DOUBLE,
        allowNull : false
    },
    quantidade_produto : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    id_categoria : {
        type : DataTypes.INTEGER,
        onDelete : 'CASCADE',
        references : {
            model : Categoria,
            key : "id_categoria"
        }
    },
    id_vendedor : {
        type : DataTypes.INTEGER,
        onDelete : 'CASCADE',
        references : {
            model : Vendedor,
            key : "id_vendedor"
        }
    }

})


module.exports = Produto;




// CREATE TABLE produtos (
//     id_produto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     nome_produto VARCHAR(100) NOT NULL,
//     descricao_produto VARCHAR(1000) NOT NULL,
//     preco_produto DOUBLE NOT NULL,
//     quantidade_produto INT NOT NULL,
//     id_categoria INT NOT NULL,
//     id_vendedor INT NOT NULL,
//     FOREIGN KEY (id_categoria) REFERENCES categorias(id_categoria),
//     FOREIGN KEY (id_vendedor) REFERENCES vendedores(id_vendedor)
// );
