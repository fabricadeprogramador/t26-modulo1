var express = require('express')
var router = express.Router()

const CategoriaController = require('../controllers/categoria-controller')

//Lista Todas de Categorias
router.get("/", CategoriaController.listarTodos)

//Busca por Categoria pelo ID
router.get("/:id", CategoriaController.buscarPorId)

//Cadastro de Categorias
router.post("/", CategoriaController.cadastrar)

//Alteração de dados de uma categoria
router.put("/", CategoriaController.alterar)

//Exclusão de uma categoria
router.delete("/:id", CategoriaController.deletar)

module.exports = router