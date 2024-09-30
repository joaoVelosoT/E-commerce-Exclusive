const {Router} = require('express')
const router = Router()
const routerCliente = require('./routerCliente');
const routerCategoria = require('./routerCategoria');
const routerVendedor = require('./routerVendedor');
const routerProduto = require('./routerProduto');
const routerImagemProduto = require('./routerImagemProduto');

router.use("/cliente", routerCliente);

router.use("/categoria", routerCategoria);
router.use("/vendedor", routerVendedor);
router.use("/produto", routerProduto);
router.use("/imagemproduto", routerImagemProduto);



module.exports = router