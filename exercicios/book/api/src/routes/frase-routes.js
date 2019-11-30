var express = require('express')
var router = express.Router()

const FraseController = require('../controllers/frase-controller')

//Lista Todas de Frases
router.get("/", FraseController.listarTodos)

//Busca por Frase pelo ID
router.get("/:id", FraseController.buscarPorId)

//Busca por Frase pelo ID
router.get("/categoria/:id", FraseController.buscarPorCategoriaId)

//Cadastro de Frases
router.post("/", FraseController.cadastrar)

//Alteração de dados de uma Frase
router.put("/", FraseController.alterar)

//Exclusão de uma Frase
router.delete("/:id", FraseController.deletar)

module.exports = router