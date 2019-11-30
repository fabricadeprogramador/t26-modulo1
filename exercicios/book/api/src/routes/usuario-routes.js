var express = require('express')
var router = express.Router()

const UsuarioController = require('../controllers/usuario-controller')

//Lista Todas de Usuarios
router.get("/", UsuarioController.listarTodos)

//Busca por Usuario pelo ID
router.get("/:id", UsuarioController.buscarPorId)


//Cadastro de Usuarios
router.post("/", UsuarioController.cadastrar)

//Favoritar frase do Usuario
router.put("/favoritar", UsuarioController.favoritar)

//Alteração de dados de uma Usuario
router.put("/", UsuarioController.alterar)

//Exclusão de uma Usuario
router.delete("/:id", UsuarioController.deletar)

module.exports = router