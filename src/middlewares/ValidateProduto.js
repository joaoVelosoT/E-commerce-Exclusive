const ValidateProduto = (req,res, next) => {
    const {nome_produto, descricao_produto, preco_produto, quantidade_produto, id_categoria, id_vendedor} = req.body;


    if(!nome_produto ||!descricao_produto || !preco_produto || !quantidade_produto || !id_categoria || !id_vendedor){
        return res.status(400).json({
            msg : "Valide seus dados"
        })
    }

    if(nome_produto.trim().length < 3){
        return res.status(400).json({
            msg : "Digite o nome do produto com no minimo 3 caracteres"
        })
    }

    if(nome_produto.trim().length > 100){
        return res.status(400).json({
            msg : "Digite o nome do produto com no maximo 3 caracteres"
        })
    }

    if(descricao_produto.trim().length < 30){
        return res.status(400).json({
            msg : "Digite a descrição com no minimo 30 caracteres"
        })
    }

    if(descricao_produto.trim().length > 1000){
        return res.status(400).json({
            msg : "Digite a descrição com no maximo 1000 caracteres"
        })
    }

    if(isNaN(preco_produto)){
        return res.status(400).json({
            msg : "Digite um preço valido"
        })
    }

    if(preco_produto < 0){
        return res.status(400).json({
            msg : "Digite um numero positivo"
        })
    }

    if(isNaN(quantidade_produto)){
        return res.status(400).json({
            msg : "Digite uma quantidade valida"
        })
    }

    if(quantidade_produto < 0){
        return res.status(400).json({
            msg : "Digite uma quantidade positiva"
        })
    }

    if(isNaN(id_categoria) || isNaN(id_vendedor)){
        return res.status(400).json({
            msg : "O ID não e um numero"
        })
    }

    if(id_categoria < 0 || id_vendedor < 0){
        return res.status(400).json({
            msg : "O ID não pode ser negativo"
        })
    }

    return next();
}

const ValidateProdutoID = (req,res,next) => {
    const {id_produto} = req.params;

    if(!id_produto){
        return res.status(400).json({
            msg : "Valide seus parametros"
        })
    }

    if(isNaN(id_produto)){
        return res.status(400).json({
            msg : "O parametro não e um numero"
        })
    }

    if(id_produto < 0){
        return res.status(400).json({
            msg : "O parametro não pode ser negativo"
        })
    }

    return next();

}


module.exports = {ValidateProduto, ValidateProdutoID};