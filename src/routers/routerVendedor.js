const {Router} = require('express');
const VendedorController = require('../controllers/VendedorController');
const ValidateVendedor = require('../middlewares/ValidateVendedor');
const router = Router();

router.post('/', ValidateVendedor, (req,res) => {
    VendedorController.create(req,res);
})


module.exports = router;