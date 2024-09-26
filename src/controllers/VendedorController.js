const VendedorController = {
    create : async (req,res) => {
        try {


            return res.status(200).json({
                msg : "chegou no controller"
            })
        } catch (error) {
            console.error(error);
            return res.status(400).json({
                msg : "Erro, contate o suporte"
            })
        }
    }
}

module.exports = VendedorController;