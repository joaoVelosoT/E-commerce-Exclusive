const Cliente = require("../models/Cliente");

const ClienteController = {
    create : async (req,res) => {

        try {
            const { nome_cliente, email_cliente, senha_cliente, cpf_cliente } = req.body;
            
        await Cliente.create({
            nome : nome_cliente,
            email : email_cliente,
            senha : senha_cliente,
            cpf : cpf_cliente
        })

        return res.status(200).json({
            msg : "O usuario foi adicionado com sucesso !"
        })
        } catch (error) {
          console.error(error);
          res.status(400).json({
            msg : "Erro, contate o suporte"
          })  
        }
    }
}


module.exports = ClienteController;