const Cliente = require("../models/Cliente");

const ClienteController = {
  create: async (req, res) => {
    try {
      const { nome_cliente, email_cliente, senha_cliente, cpf_cliente } =
        req.body;

      // Validar se o email e o cpf e unico

      const existeConta = await Cliente.findOne({
        where: { 
            email_cliente : email_cliente,
            cpf_cliente : cpf_cliente
         },
      });

      if (existeConta) {
        return res.status(400).json({
          msg: "Já existe alguem com esse cadastro",
        });
      }

      await Cliente.create({
        nome_cliente: nome_cliente,
        email_cliente: email_cliente,
        senha_cliente: senha_cliente,
        cpf_cliente: cpf_cliente,
      });

      return res.status(200).json({
        msg: "O usuario foi adicionado com sucesso !",
      });
    } catch (error) {
      console.error(error);
      res.status(400).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const clientes = await Cliente.findAll();

      if (clientes.length === 0) {
        return res.status(400).json({
          msg: "Não existe nenhum cliente cadastrado",
        });
      }

      return res.status(200).json({
        clientes,
      });

    } catch (error) {
      console.error(error);
      res.status(400).json({
        msg: "Erro, contate o suporte",
      });
    }
  },
  getOne : async (req,res) => {
    try {
        const {id_cliente} = req.params

        const cliente = await Cliente.findByPk(id_cliente);

        if(!cliente) {
            return res.status(400).json({
                msg : "Cliente não encontrado"
            })
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({
          msg: "Erro, contate o suporte",
        });  
    }
  }
};

module.exports = ClienteController;
