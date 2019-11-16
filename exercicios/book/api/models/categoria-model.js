// Criando Schema
var mongoose = require('mongoose');
var categoriaSchema = new mongoose.Schema({
    descricao: String
});
//Criando o modelo 
module.exports = mongoose.model('Categoria', categoriaSchema);