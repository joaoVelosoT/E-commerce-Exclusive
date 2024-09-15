const ValidateCliente = (req, res, next) => {
  try {
    const { nome, email, senha, cpf } = req.body;

    if (!nome || !email || !senha || !cpf) {
      return res.status(400).json({
        msg: "Campos invalidos, revise seus dados",
      });
    }

    // Validando o nome
    if(nome.trim() === ""){
        return res.status(400).json({
            msg : "O campo não pode estar vazio ou conter apenas espaços. Por favor, insira um valor válido."
        })
    }
    if (nome.trim().length > 100) {
      return res.status(400).json({
        msg: "O nome fornecido é muito longo. Por favor, insira no máximo 100 caracteres",
      });
    }
    if(nome.trim().length < 3) {
        return res.status(400).json({
            msg : "O nome fornecido é muito curto. Por favor, insira no minimo 3 caracteres"
        })
    }

    // ARRUMAR O BANCO DE DADOS PARA O EMAIL E O CPF SEREM UNICOS

    // Validando o email
    if (email.length > 256) {
      return res.status(400).json({
        msg: "O email fornecido é muito longo. Por favor, insira no máximo 256 caracteres",
      });
    }

    if (senha.length > 100) {
      return res.status(400).json({
        msg: "A senha fornecida é muito longa. Por favor, insira no máximo 100 caracteres",
      });
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
