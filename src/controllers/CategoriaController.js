const CategoriaController = {
        create : async(req,res)=>{
        try {
            res.status(200).json({
                msg : "Categoria criada com sucesso"
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Contate o Suporte"
            })
        }

    }
}



module.exports = CategoriaController;