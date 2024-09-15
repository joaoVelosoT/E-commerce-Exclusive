const ValidateCliente = (req,res,next) => {
    console.log("teste")
    console.log(req)
    const {nome, email, senha, cpf} = req.body;

    if(!nome || !email || !senha || !cpf){
        return res.status(400).json({
            msg : "Campos invalidos, revise seus dados"
        })
    }

    return next();
}


module.exports = {ValidateCliente}