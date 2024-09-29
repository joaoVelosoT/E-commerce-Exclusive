const validator = require("validator");
const { cnpj } = require("cpf-cnpj-validator");

const ValidateVendedor = (req,res,next) => {
    try {
        const {nome_vendedor, email_vendedor, senha_vendedor, cnpj_vendedor} = req.body;

        if(!nome_vendedor || !email_vendedor || !senha_vendedor || !cnpj_vendedor){
            return res.status(400).json({
                msg : "Valide seus dados"
            })
        }

        if (!validator.isEmail(email_vendedor)) {
            return res.status(400).json({
              msg: "Digite um email valido",
            });
          }
      
          // Validando a senha
          if (!validator.isStrongPassword(senha_vendedor)) {
            return res.status(400).json({
              msg: "Digite uma senha forte",
            });
          } else if (senha_vendedor.length > 100) {
            return res.status(400).json({
              msg: "Digite uma senha com no maximo 100 caracteres",
            });
          }

          if(!cnpj.isValid(cnpj_vendedor)){
            return res.status(400).json({
                msg : "Digite um CNPJ valido"
            })
          }

        return next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            msg : "Erro, contate o suporte"
        })
    }
};

const ValidateVendedorID = (req,res,next) => {
    try {
      const {id_vendedor} = req.params;
  
      if(!id_vendedor){
        return res.status(400).json({
          msg : 'Valide os parametros'
        })
      }
  
      if(isNaN(id_vendedor)){
        return res.status(400).json({
          msg : 'O parametro não e um numero'
        })
      }

      if(id_vendedor < 0){
        return res.status(400).json({
            msg : "O parametro não pode ser negativo"
        })
    }
      return next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        msg : "Contate o suporte"
      })
    }
  };


module.exports = {ValidateVendedor, ValidateVendedorID};


// CREATE TABLE vendedores(
// 	id_vendedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     nome_vendedor VARCHAR(100) NOT NULL,
//     email_vendedor VARCHAR(256) NOT NULL UNIQUE,
//     senha_vendedor VARCHAR(100) NOT NULL UNIQUE,
//     cnpj_vendedor VARCHAR(14) NOT NULL UNIQUE
// );