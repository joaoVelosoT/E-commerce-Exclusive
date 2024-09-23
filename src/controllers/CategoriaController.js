const Categoria = require("../models/Categoria");

const CategoriaController = {
        create : async(req,res)=>{
        try {

            const {nome_categoria} = req.body;

            Categoria.create({nome_categoria : nome_categoria});

            res.status(200).json({
                msg : "Categoria criada com sucesso"
            })

        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Contate o Suporte"
            })
        }

    },
    getAll : async(req,res) => {
        try {
            

            const categorias = await Categoria.findAll();

            if(categorias.length === 0){
                return res.status(500).json({
                    msg : "Nenhuma categoria foi cadastrada"
                })
            }

            return res.status(200).json({
                categorias
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Contate o Suporte"
            })
        }
    },
    getOne : async (req,res) => {
        try {
            const {id_categoria} = req.params;
            const categoria = await Categoria.findByPk(id_categoria);
            
            if(!categoria){
                return res.status(400).json({
                    msg : "Não foi encontrado a categoria"
                })
            }

            return res.status(200).json({
                msg : "Categoria encontrada",
                categoria
            })


        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Contate o Suporte"
            })
        }
    },
    update : async (req,res) => {
        try {
            
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Contate o Suporte"
            })
        }
    },
    delete : async (req,res) => {
        try {
            
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Contate o Suporte"
            })
        }
    },

    
}



module.exports = CategoriaController;