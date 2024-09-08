const {Router} = require('express')
const router = Router()
const routerCliente = require('./routerCliente');

router.use("/cliente", routerCliente);



module.exports = router