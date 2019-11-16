const express = require('express')
const bodyParser = require('body-parser')
const categoriaRoutes = require('./my_modules/categoria-routes')

const app = express()
app.use(bodyParser.json())

//Cadastrando sistema de rota
app.use('/categoria', categoriaRoutes)

//Configurando a porta
const port = 3000
app.listen(port, () => console.log(`Api rodando na porta ${port}!`))

//Conectando com Mongo

var mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://appfrases:12345@cluster0-v20sn.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Conectado com sucesso no Mongo")
});

// Criando Schema

var categoriaSchema = new mongoose.Schema({
    descricao: String
});
//Criando o modelo 
var Categoria = mongoose.model('Categoria', categoriaSchema);

//Instanciando um objeto
var cat = new Categoria({
    descricao: 'Viagem'
})
//Faz a persistencia
cat.save(function (error, catSalva) {
    if (error) {
        console.log("Nao salvou")
    }

    console.log(catSalva._id)
})