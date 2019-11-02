//Criar as rotas
var express = require("express");
//Entende os Json
var bodyParser = require("body-parser");

var CategoriaCRUD = require("../categoria-crud");

//Habilitando Expresse com BobyParser
var app = express();
app.use(bodyParser.json());

//let gerenciador = new CategoriaCRUD();

//Servidor Escuta uma porta
app.listen(3000, function () {
    console.log("Api rodando na porta 3000");
});