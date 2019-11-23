const categoriaModel = require("../models/categoria-model")

class CategoriaController {

    static async listarTodos(req, res) {
        let lista = await categoriaModel.find({})
        res.json(lista)
    }

    static async buscarPorId(req, res) {
        let categoria = await categoriaModel.findById({
            _id: req.params.id
        })
        res.json(categoria)
    }

    static cadastrar(req, res) {
        categoriaModel.create(req.body)
        //envia mensagem pro client
        res.send('Cadastrando com sucesso')
    }

    static async alterar(req, res) {

        //Leitura dos dados em Json
        let id = req.body.id

        var cat = {
            descricao: req.body.descricao
        }

        await categoriaModel.findByIdAndUpdate({
            _id: id
        }, cat)

        res.send('Alterado com sucesso ')

    }

    static async deletar(req, res) {
        const id = req.params.id;

        await categoriaModel.deleteOne({
            _id: id
        })

        res.send('Deletado com sucesso')
    }
}

module.exports = CategoriaController