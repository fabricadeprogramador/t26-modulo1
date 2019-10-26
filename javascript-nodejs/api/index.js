var express = require('express')
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.json())

const usuarios = [{
    nome: 'Zé'
}, {
    nome: 'Jão '
}, {
    nome: 'Maria'
}]

app.get('/usuarios', (req, res) => {
    res.json(usuarios)
})

app.post('/usuarios', function (req, res) {
    //console.log(req.body)
    usuarios.push(req.body)
    res.json({
        status: 'usuario criado com sucesso!'
    })
})


app.get('/', function (req, res) {
    res.send('Chamou por GET :D')
})

app.post('/', function (req, res) {
    res.send("Chamou por POST !!!")
})

app.put('/', function (req, res) {
    res.send("Chamou por PUT!")
})

app.delete('/', function (req, res) {
    res.send("Chamou por DELETE")
})

app.listen(3000, function () {
    console.log('Api rodando na porta 3000')
})