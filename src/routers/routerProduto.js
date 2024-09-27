const {Router} = require('express');
const router = Router();
const ProdutoController = require('../controllers/ProdutoController');
const { ValidateProduto } = require('../middlewares/ValidateProduto');

router.post('/', ValidateProduto, (req,res) => {
    ProdutoController.create(req,res);
})



module.exports = router;