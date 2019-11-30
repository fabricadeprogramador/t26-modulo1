// Criando Schema
var mongoose = require('mongoose');
var usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    favoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Frase'
    }]
});
//Criando o modelo 
module.exports = mongoose.model('Usuario', usuarioSchema);