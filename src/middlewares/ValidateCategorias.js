const ValidateCategoria = (req,res,next) => {
    const {nome_categoria} = req.body;


    // Validacao nome_categoria

    
    console.log(nome_categoria)




    res.status(200).json({
        msg : "Deu tudo certo, mas nao foi para o DB"
    })
}

module.exports = ValidateCategoria;