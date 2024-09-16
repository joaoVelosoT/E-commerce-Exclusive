// Importando bibliotecas de validações
const validator = require('validator');
const  {cpf} = require('cpf-cnpj-validator')

const ValidateCliente = (req, res, next) => {
  try {
    const { nome_cliente, email_cliente, senha_cliente, cpf_cliente } = req.body;

    if (!nome_cliente || !email_cliente || !senha_cliente || !cpf_cliente) {
      return res.status(400).json({
        msg: "Campos invalidos, revise seus dados",
      });
    }

    // Validando o nome
    if(!valName(nome_cliente)){
      return res.status(400).json({
        msg : "Digite um nome valido"
      })
    }
    // Validando o email
    if(!validator.isEmail(email_cliente)){
      return res.status(400).json({
        msg : "Digite um email valido"
      })
    }

    // Validando a senha
    if(!validator.isStrongPassword(senha_cliente)){
      res.status(400).json({
        msg : "Digite uma senha forte"
      })
    } else if (senha_cliente.length > 100){
      res.status(400).json({
        msg : "Digite uma senha com no maximo 100 caracteres"
      })
    }
   
    // Validando o CPF
    if(!cpf.isValid(cpf_cliente)){
      return res.status(400).json({
        msg : "O cpf e invalido"
      })
    }

    return next();
  } catch (error) {
    console.error(error);
    res.status(400).json({
      msg: "Contate o suporte",
    });
  }
};

module.exports = { ValidateCliente };











function valName(nome) {

  const nomeLimpo = nome.trim();
  if(nomeLimpo === "" || nomeLimpo.length > 100 || nomeLimpo.length < 3){
    return false;
}else {
  return true;
}


// if (nome.trim().length > 100) {
//   return res.status(400).json({
//     msg: "O nome fornecido é muito longo. Por favor, insira no máximo 100 caracteres",
//   });
// }
// if(nome.trim().length < 3) {
//     return res.status(400).json({
//         msg : "O nome fornecido é muito curto. Por favor, insira no minimo 3 caracteres"
//     })
// }
}