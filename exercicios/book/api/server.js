const express = require('express')
const bodyParser = require('body-parser')

const categoriaRoutes = require('./src/routes/categoria-routes')
const fraseRoutes = require('./src/routes/frase-routes')

const app = express()
app.use(bodyParser.json())

//Cadastrando sistema de rota
app.use('/categoria', categoriaRoutes)
app.use('/frase', fraseRoutes)

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