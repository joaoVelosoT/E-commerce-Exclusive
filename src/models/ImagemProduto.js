const {DataTypes} = require('sequelize');
const sequelize = require('../config/config');
const Produto = require('./Produto');

const ImagemProduto = sequelize.define('imagem_produto', {
    id_imagem_produto : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        autoIncrement : true,
    },
    nome_imagem : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    descricao_imagem : {
        type : DataTypes.STRING(255),
        allowNull : false
    },
    imagem : {
        type : DataTypes.BLOB,
        allowNull : false
    },
    id_produto : {
        type : DataTypes.INTEGER,
        allowNull : false,
        onDelete : 'CASCADE',
        references : {
            model : Produto,
            key : "id_produto"
        }
    }
})

module.exports = ImagemProduto;


// CREATE TABLE imagens_produtos(
// 	id_imagem_produto INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     url_imagem VARCHAR(255) NOT NULL,
//     descricao_imagem VARCHAR(255) NOT NULL,
//     id_produto INT NOT NULL,
//     FOREIGN KEY (id_produto) REFERENCES produtos(id_produto) ON DELETE CASCADE
// );
