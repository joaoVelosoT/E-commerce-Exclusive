const Vendedor = require("../models/Vendedor");
const {Op} = require('sequelize');


const VendedorController = {
    create : async (req,res) => {
        try {

            const {nome_vendedor, email_vendedor, senha_vendedor, cnpj_vendedor} = req.body;
             
            const jaExisteVendedor = await Vendedor.findOne({
                where: {
                    [Op.or]: [
                      { nome_vendedor: nome_vendedor },
                      { email_vendedor: email_vendedor },
                      { cnpj_vendedor: cnpj_vendedor }
                    ]
                  }
            })

            if(jaExisteVendedor){
                return res.status(400).json({
                    msg : "Já existe alguem com esses dados"
                })
            }


            const vendedor = await Vendedor.create({nome_vendedor, email_vendedor, senha_vendedor, cnpj_vendedor});

            return res.status(200).json({
                msg : "Vendedor criado com sucesso",
                vendedor
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
            const vendedores = await Vendedor.findAll();

            if(vendedores.length === 0){
                return res.status(400).json({
                    msg : "Não existe nenhum vendedor"
                });
            };

            return res.status(200).json({
                vendedores
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

            const {id_vendedor} = req.params;

            const vendedor = await Vendedor.findByPk(id_vendedor);

            if(!vendedor){
                return res.status(400).json({
                    msg : "Vendedor não encontrado"
                })
            }

            return res.status(200).json({
                vendedor
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
            const {id_vendedor} = req.params;

            const {nome_vendedor, email_vendedor, senha_vendedor, cnpj_vendedor} = req.body;
             
            const jaExisteVendedor = await Vendedor.findOne({
                where: {
                    [Op.or]: [
                      { nome_vendedor: nome_vendedor },
                      { email_vendedor: email_vendedor },
                      { cnpj_vendedor: cnpj_vendedor }
                    ]
                  }
            })

            if(jaExisteVendedor){
                return res.status(400).json({
                    msg : "Já existe alguem com esses dados"
                })
            }

            const vendedor = await Vendedor.findByPk(id_vendedor);

            if(!vendedor){
                return res.status(400).json({
                    msg : "Vendedor não encontrado"
                })
            }

            await vendedor.update({nome_vendedor, email_vendedor, senha_vendedor, cnpj_vendedor});

            return res.status(200).json({
                msg : "Vendedor atualizado com sucesso"
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
            console.log("teste")
            const {id_vendedor} = req.params;

            const vendedor = await Vendedor.findByPk(id_vendedor);

            if(!vendedor) {
                return res.status(400).json({
                    msg : "Vendedor não encontrado"
                })
            }

            await vendedor.destroy();

            return res.status(200).json({
                msg : "Vendedor deletado com sucesso"
            })
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg : "Erro, contate o suporte"
            })
        }
    }

}

module.exports = VendedorController;