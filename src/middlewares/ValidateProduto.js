const ValidateProduto = (req,res, next) => {
    const {nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor} = req.body;


    if(!nome_produto ||!descricao_produto || !preco_produto || !quantidade_produto || !id_categoria || !id_vendedor){
        return res.status(400).json({
            msg : "Valide seus dados"
        })
    }

    return next();
}


module.exports = {ValidateProduto};