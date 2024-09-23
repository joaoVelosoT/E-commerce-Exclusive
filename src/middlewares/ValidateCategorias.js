const ValidateCategoria = (req, res, next) => {
  try {
    const { nome_categoria } = req.body;

    if (!nome_categoria) {
      return res.status(400).json({
        msg: "Valide seus dados",
      });
    }

    if (nome_categoria.trim().length < 3) {
      return res.status(400).json({
        msg: "O nome precisa ter no minimo 3 caracteres",
      });
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Erro, contate o suporte",
    });
  }
};

const ValidateCategoriaID = (req, res, next) => {
  try {
    const { id_categoria } = req.params;

    if (!id_categoria) {
      return res.status(400).json({
        msg: "Valide os parametros",
      });
    }

    if (isNaN(id_categoria)) {
      return res.status(400).json({
        msg: "O parametro não e um numero",
      });
    }

    return next();
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      msg: "Erro, contate o suporte",
    });
  }
};

module.exports = { ValidateCategoria, ValidateCategoriaID };
