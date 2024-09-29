const {Router} = require('express');
const router = Router();
const ProdutoController = require('../controllers/ProdutoController');
const { ValidateProduto, ValidateProdutoID } = require('../middlewares/ValidateProduto');

router.post('/', ValidateProduto, (req,res) => {
    ProdutoController.create(req,res);
})

router.get('/', (req,res) => {
    ProdutoController.getAll(req,res);
})

router.get('/:id_produto', ValidateProdutoID, (req,res) => {
    ProdutoController.getOne(req,res);
})

router.put('/:id_produto', ValidateProdutoID, ValidateProduto, (req,res) => {
    ProdutoController.update(req,res);
})

router.delete('/:id_produto', ValidateProdutoID, (req,res) => {
    ProdutoController.delete(req,res);
})


module.exports = router;