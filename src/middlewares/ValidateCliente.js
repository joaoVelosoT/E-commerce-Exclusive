const ValidateCliente = (req,res,next) => {
    const {nome, email, senha, cpf} = req.body

    if(!nome || !email || !senha || !cpf){
        return res.status(400).json({
            msg : "Campos invalidos, revise seus dados"
        })
    }

    return next();
}


module.exports = {ValidateCliente}