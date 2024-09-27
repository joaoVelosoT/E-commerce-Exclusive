const Produto = require("../models/Produto");

const ProdutoController = {

    create : async (req,res) => {
        try {
            const {nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor} = req.body;

            const produto = await Produto.create({nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor});

            return res.status(200).json({
                msg : "Produto criado com sucesso",
                produto 
            })

            
            return res.status(200).json({
                msg : "Produto criado com sucesso"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    }
}

module.exports = ProdutoController;