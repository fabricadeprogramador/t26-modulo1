var express = require('express')
var router = express.Router()

const CrudCategoria = require('./categoria-crud')
const Categoria = require('./categoria')
const crudCat = new CrudCategoria()

//Lista Todas de Categorias
router.get("/", (req, res) => res.json(crudCat.categorias))

//Busca por Categoria pelo ID
router.get("/:id", (req, res) => res.json(crudCat.getCategoriaById(req.params.id)))

//Cadastro de Categorias
router.post("/", (req, res) => {
    //Ler o json do client
    //Cria um objeto categoria passanda a descricao no construtor
    let categoria = new Categoria(req.body.descricao, req.body.id);
    //Cadastra o objeto categoria
    crudCat.cadastrarCategoria(categoria)
    //envia mensagem pro client
    res.send('Cadastrando com sucesso')

})

//Alteração de dados de uma categoria
router.put("/", (req, res) => {

    //Leitura dos dados em Json
    let id = req.body.id
    let descricao = req.body.descricao

    let categoria = new Categoria(descricao, id);
    crudCat.alterar(categoria)
    res.send('Alterado com sucesso')

})

//Exclusão de uma categoria
router.delete("/:id", (req, res) => {
    crudCat.deletar(req.params.id)
    res.send('Deletado com sucesso')

})

module.exports = router