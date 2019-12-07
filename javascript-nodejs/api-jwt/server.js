var jwt = require("jsonwebtoken");
var express = require("express");
var bodyParser = require('body-parser')

// EXPRESS
const app = express()
app.use(bodyParser.json())

app.use("/cadastrar", function (req, res) {

    // JWT
    var token = jwt.sign({
        usuario: "jao@gmail.com"
    }, "banana");


    res.send(token)

})

app.use("/login", verificarToken, function (req, res) {
    console.log("Logado com sucesso")
    res.sendStatus(200)
})

app.listen(3000, function () {
    console.log("Api funcionando na porta 3000")
})


function verificarToken(req, res, next) {


    //JWT
    //Leitura dos header para verificar ser tem o atributo authorization
    if (typeof req.headers.authorization !== "undefined") {

        //Dentro do atribuito authorization virá uma string como Bearer <Token>
        //fazemo split para obter apenas o token
        var token = req.headers.authorization.split(" ")[1]

        //Pedimos par ao JWT verificar se o token é valido
        var decoded = jwt.verify(token, "banana");

        //Imprimios o usuário que foi utilizado na hora da geração do toke pela rota de cadastro
        console.log("usuario:" + decoded.usuario);
        //res.sendStatus(403)
        console.log("Vericando token, está OK")
        next()
    } else {
        res.sendStatus(403)
    }
}