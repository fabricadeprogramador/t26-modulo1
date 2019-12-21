const express = require('express')
const bodyParser = require('body-parser')

const categoriaRoutes = require('./src/routes/categoria-routes')
const fraseRoutes = require('./src/routes/frase-routes')
const usuarioRoutes = require('./src/routes/usuario-routes')
const jwt = require("jsonwebtoken");
const chavePrivada = "banana nanica"

const app = express()
app.use(bodyParser.json())

//Ativando o CORS permissao de request
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Cadastrando sistema de rota
// app.use('/categoria', verificarToken, categoriaRoutes)
// app.use('/frase', verificarToken, fraseRoutes)
// app.use('/usuario', verificarToken, usuarioRoutes)

app.use('/categoria', categoriaRoutes)
app.use('/frase', fraseRoutes)
app.use('/usuario', usuarioRoutes)

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

//Código do JWT

app.use("/gerar-token", function (req, res) {

    // JWT
    var token = jwt.sign(req.body, chavePrivada);


    res.send(token)

})


function verificarToken(req, res, next) {

    //JWT
    //Leitura dos header para verificar ser tem o atributo authorization
    if (typeof req.headers.authorization !== "undefined") {

        //Dentro do atribuito authorization virá uma string como Bearer <Token>
        //fazemo split para obter apenas o token
        var token = req.headers.authorization.split(" ")[1]

        //Pedimos par ao JWT verificar se o token é valido
        var decoded = jwt.verify(token, chavePrivada);

        //Imprimios o usuário que foi utilizado na hora da geração do toke pela rota de cadastro
        console.log("usuario:" + decoded.usuario + " senha:" + decoded.senha);
        //res.sendStatus(403)
        console.log("Vericando token, está OK")
        next()
    } else {
        res.sendStatus(403)
    }
}