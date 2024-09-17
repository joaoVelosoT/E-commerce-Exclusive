const {Router} = require('express')
const router = Router()
const routerCliente = require('./routerCliente');
const routerCategoria = require('./routerCategoria')

router.use("/cliente", routerCliente);
router.use("/categoria", routerCategoria);



module.exports = router