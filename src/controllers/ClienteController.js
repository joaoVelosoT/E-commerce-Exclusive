const Cliente = require("../models/Cliente");

const ClienteController = {
    create : async (req,res) => {

        try {
            const {nome,email,senha,cpf} = req.body;
            
        await Cliente.create({
            nome : nome,
            email : email,
            senha : senha,
            cpf : cpf
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