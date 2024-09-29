const Categoria = require("../models/Categoria");
const Produto = require("../models/Produto");
const Vendedor = require("../models/Vendedor");

const ProdutoController = {

    create : async (req,res) => {
        try {
            const {nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor} = req.body;
            const categoria = await Categoria.findByPk(id_categoria);
            const vendedor = await Vendedor.findByPk(id_vendedor);

            if(!categoria){
                return res.status(400).json({
                    msg : "Categoria não encontrada"
                })
            }

            if(!vendedor){
                return res.status(400).json({
                    msg : "Vendedor não encontrado"
                })
            }

            const produto = await Produto.create({nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor});

            

            return res.status(200).json({
                msg : "Produto criado com sucesso",
                produto 
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
            const produtos = await Produto.findAll();

            if(produtos.length === 0){
                return res.status(400).json({
                    msg : "Não tem nenhum produto cadastrado"
                })
            }

            return res.status(200).json({
                produtos
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            const {id_produto} = req.params;

            const produto = await Produto.findByPk(id_produto);

            if(!produto){
                return res.status(400).json({
                    msg : "Produto não encontrado"
                })
            }

            return res.status(200).json({
                produto
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    update : async (req,res) => {
        try {

            const {id_produto} = req.params;

            const produto = await Produto.findByPk(id_produto);

            if(!produto){
                return res.status(400).json({
                    msg : "Produto não encontrado"
                })
            }

            const {nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor} = req.body;
            const categoria = await Categoria.findByPk(id_categoria);
            const vendedor = await Vendedor.findByPk(id_vendedor);

            if(!categoria){
                return res.status(400).json({
                    msg : "Categoria não encontrada"
                })
            }

            if(!vendedor){
                return res.status(400).json({
                    msg : "Vendedor não encontrado"
                })
            }

            await produto.update({nome_produto,descricao_produto,preco_produto,quantidade_produto,id_categoria,id_vendedor});

            return res.status(200).json({
                msg : "Produto atualizado",
                produto
            })


        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
    delete : async (req,res) => {
        try {
            const {id_produto} = req.params;

            const produto = await Produto.findByPk(id_produto);

            if(!produto){
                return res.status(400).json({
                    msg : "Produto não encontrado"
                })
            }

            await produto.destroy();

            return res.status(200).json({
                msg : "Produto deletado com sucesso",
                produto
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    },
}

module.exports = ProdutoController;