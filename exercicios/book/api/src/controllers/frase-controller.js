const fraseModel = require("../models/frase-model")
const ObjectId = require('mongoose').Types.ObjectId;

class FraseController {

    static async listarTodos(req, res) {
        let lista = await fraseModel.find({})
        res.json(lista)
    }

    static async buscarPorId(req, res) {
        let frase = await fraseModel.findById({
            _id: req.params.id
        })
        res.json(frase)
    }

    static async buscarPorCategoriaId(req, res) {

        console.log("ID da Categoria:" + req.params.id)
        let frases = await fraseModel.find({
            categoria: new ObjectId(req.params.id)
        })
        res.json(frases)
    }

    static cadastrar(req, res) {
        fraseModel.create(req.body)
        //envia mensagem pro client
        res.send('Cadastrando com sucesso')
    }

    static async alterar(req, res) {

        //Leitura dos dados em Json
        let id = req.body.id

        var cat = {
            descricao: req.body.descricao
        }

        await fraseModel.findByIdAndUpdate({
            _id: id
        }, cat)

        res.send('Alterado com sucesso ')

    }

    static async deletar(req, res) {
        const id = req.params.id;

        await fraseModel.deleteOne({
            _id: id
        })

        res.send('Deletado com sucesso')
    }
}

module.exports = FraseController