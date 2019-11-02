const express = require('express')
const bodyParser = require('body-parser')
const CrudCategoria = require('./my_modules/categoria-crud')
const Categoria = require('./my_modules/categoria')


const app = express()
app.use(bodyParser.json())
const crudCat = new CrudCategoria()

const port = 3000
//routes
app.get("/", (req, res) => res.json(crudCat.categorias))
app.post("/", (req, res) => {
    //Ler o json do client
    //Cria um objeto categoria passanda a descricao no construtor
    let categoria = new Categoria(req.body.descricao);
    //Cadastra o objeto categoria
    crudCat.cadastrarCategoria(categoria)
    //envia mensagem pro client
    res.send('Cadastrando com sucesso')

})

app.listen(port, () => console.log(`Api rodando na porta ${port}!`))