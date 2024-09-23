const {Router} = require('express')
const { ValidateCliente, ValidateClienteID } = require('../middlewares/ValidateCliente')
const ClienteController = require("../controllers/ClienteController");
const router = Router()


router.post("/", ValidateCliente, (req,res)=> {
    ClienteController.create(req,res);
})

router.get("/", (req,res)=> {
    ClienteController.getAll(req,res);
})

router.get("/:id_cliente", ValidateClienteID,(req,res)=> {
    ClienteController.getOne(req,res);
})

router.put("/:id_cliente", ValidateClienteID, ValidateCliente, (req,res)=> {
    ClienteController.update(req,res);
})

router.delete("/:id_cliente", ValidateClienteID, (req,res)=> {
    ClienteController.delete(req,res);
})







module.exports = router