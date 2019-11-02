var express = require('express')
var router = express.Router()

const CrudCategoria = require('./categoria-crud')
const Categoria = require('./categoria')
const crudCat = new CrudCategoria()

//routes
router.get("/", (req, res) => res.json(crudCat.categorias))
router.post("/", (req, res) => {
    //Ler o json do client
    //Cria um objeto categoria passanda a descricao no construtor
    let categoria = new Categoria(req.body.descricao);
    //Cadastra o objeto categoria
    crudCat.cadastrarCategoria(categoria)
    //envia mensagem pro client
    res.send('Cadastrando com sucesso')

})

module.exports = router