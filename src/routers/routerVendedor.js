const {Router} = require('express');
const VendedorController = require('../controllers/VendedorController');
const {ValidateVendedor, ValidateVendedorID} = require('../middlewares/ValidateVendedor');
const router = Router();

router.post('/', ValidateVendedor, (req,res) => {
    VendedorController.create(req,res);
});

router.get('/', (req,res)=> {
    VendedorController.getAll(req,res);
})

router.get('/:id_vendedor', ValidateVendedorID, (req,res)=> {
    VendedorController.getOne(req,res);
})

router.put('/:id_vendedor', ValidateVendedorID,ValidateVendedor, (req,res)=> {
    VendedorController.update(req,res);
})


module.exports = router;