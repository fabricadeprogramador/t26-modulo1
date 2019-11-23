const categoriaModel = require("../models/categoria-model")

class CategoriaController {

    static listarTodos(req, res) {

        categoriaModel.find({}, (err, categoria) => {

            res.json(categoria)
        })

    }
    static buscarPorId(req, res) {
        categoriaModel.findById({
            _id: req.params.id
        }, (err, categoria) => {

            res.json(categoria)
        })

    }

    static cadastrar(req, res) {

        categoriaModel.create(req.body)
        //envia mensagem pro client
        res.send('Cadastrando com sucesso')


    }

    static alterar(req, res) {

        //Leitura dos dados em Json
        let id = req.body.id

        var cat = {
            descricao: req.body.descricao
        }

        categoriaModel.findByIdAndUpdate({
            _id: id
        }, cat, (err, response) => {
            res.send('Alterado com sucesso')
        })


    }

    static deletar(req, res) {
        const id = req.params.id;

        categoriaModel.deleteOne({
            _id: id
        }, (err) => {
            console.log("Nao foi possivel deletar...")
        })


        res.send('Deletado com sucesso')
    }
}

module.exports = CategoriaController