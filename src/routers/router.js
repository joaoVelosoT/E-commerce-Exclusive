const {Router} = require('express')
const router = Router()
const routerCliente = require('./routerCliente');
const routerCategoria = require('./routerCategoria');
const routerVendedor = require('./routerVendedor');

router.use("/cliente", routerCliente);
router.use("/categoria", routerCategoria);
router.use("/vendedor", routerVendedor);



module.exports = router