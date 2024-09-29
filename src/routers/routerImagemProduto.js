const {Router} = require('express');
const ImagemProdutoController = require('../controllers/ImagemProdutoController');
const router = Router();

router.post('/', (req,res) => {
    ImagemProdutoController.create(req,res);
})


module.exports = router;