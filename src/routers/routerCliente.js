const {Router} = require('express')
const { ValidateCliente } = require('../middlewares/ValidateCliente')
const ClienteController = require("../controllers/ClienteController");
const router = Router()


router.post("/", ValidateCliente, (req,res)=> {
    ClienteController.create(req,res);
})

router.get("/", (req,res)=> {
    ClienteController.getAll(req,res);
})

router.get("/:id", (req,res)=> {
    // ClienteController.getOne(req,res);
})

router.put("/:id", (req,res)=> {
    // ClienteController.update(req,res);
})

router.delete("/:id", (req,res)=> {
    // ClienteController.delete(req,res);
})







module.exports = router