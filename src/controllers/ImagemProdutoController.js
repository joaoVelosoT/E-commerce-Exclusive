const ImagemProdutoController = {
    create : async (req,res) => {

        try {
            const {imagem} = req.body;

        console.log(imagem)







        return res.status(200).json({
            msg : "Imagem criada com sucesso"
        })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Erro, contate o suporte"
            })
        }
    }
}


module.exports = ImagemProdutoController;