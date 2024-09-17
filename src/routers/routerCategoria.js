const {Router} = require('express')
const router = Router();
const CategoriaController = require('../controllers/CategoriaController');
const ValidateCategoria = require('../middlewares/ValidateCategorias');

router.post('/', ValidateCategoria, (req,res) => {
    CategoriaController.create(req,res);
})




module.exports = router;