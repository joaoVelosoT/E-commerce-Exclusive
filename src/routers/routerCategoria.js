const {Router} = require('express')
const router = Router();
const CategoriaController = require('../controllers/CategoriaController');
const {ValidateCategoria, ValidateCategoriaID} = require('../middlewares/ValidateCategorias');

router.post('/', ValidateCategoria, (req,res) => {
    CategoriaController.create(req,res);
});

router.get('/', (req,res)=> {
    CategoriaController.getAll(req,res);
})

router.get('/:id_categoria', ValidateCategoriaID,(req,res)=> {
    CategoriaController.getOne(req,res);
})

router.put('/:id_categoria', ValidateCategoriaID, ValidateCategoria,(req,res)=> {
    CategoriaController.update(req,res);
})

router.delete('/:id_categoria', ValidateCategoriaID, (req,res)=> {
    CategoriaController.delete(req,res);
})



module.exports = router;