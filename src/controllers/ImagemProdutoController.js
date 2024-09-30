const fs = require('fs')
const multer = require('multer');
const storage = multer.memoryStorage(); 
const upload = multer({ storage : storage});
const sharp = require('sharp');
const ImagemProduto = require('../models/ImagemProduto');
const ImagemProdutoController = {
    create : async (req,res) => {

        try {
            const {id_produto} = req.params;

            if(!id_produto){
                return res.status(400).json({
                    msg : "Produto não encontrado"
                })
            }
            if(!req.file){
                return res.status(400).json({
                    msg : "Imagem não recebida"
                })
            }

            const {fieldname, originalname, encoding, mimetype, buffer, size} = req.file;
            console.log(req.file)

            if(!['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'].includes(mimetype)){
                return res.status(400).json({
                    msg : "O arquivo enviado não e uma imagem"
                })
            }
            const nameImage = "id1-roblox.jpg"
            await sharp(buffer)

            .toFile(`uploads/${nameImage}`);



        return res.status(200).json({
            msg : "Imagem criada com sucesso"
        })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    getAll : async (req,res) => {
        try {
            // const imagensProduto = await ImagemProduto.findAll();

            // if(imagensProduto.length === 0){
            //     return res.status(400).json({
            //         msg : "Não tem nenhuma imagem de produto cadastrada"
            //     })
            // }


            // return res.status(200).json({
            //     imagensProduto
            // })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            }) 
        }
    }
}


module.exports = ImagemProdutoController;