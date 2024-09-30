const {Router} = require('express');
const ImagemProdutoController = require('../controllers/ImagemProdutoController');
// Importando o multer
const multer = require('multer');

// Declarando uma variavel de memoria, o que e uma memoryStorage, memoryStorage e uma memoria temporaria do multer, a qual a armazena em buffer, buffer e uma combinação binaria, o memoryStorage e uma
// memoria temporaria, apos a requisão acabar, e memoria ira acabar, ela e boa para armazenar a imagem no banco de dados.
const storage = multer.memoryStorage(); 
const upload = multer({ storage : storage});

const router = Router();

router.post('/:id_produto', upload.single('imagem'), (req,res) => {
    ImagemProdutoController.create(req,res);
});

router.get('/', (req,res) => {
    ImagemProdutoController.getAll(req,res);
})


module.exports = router;