const usuarioModel = require("../models/usuario-model")


class UsuarioController {

    static async listarTodos(req, res) {
        let lista = await usuarioModel.find({})
        res.json(lista)
    }

    static async buscarPorId(req, res) {
        let usuario = await usuarioModel.findById({
            _id: req.params.id
        })
        res.json(usuario)
    }


    static cadastrar(req, res) {
        usuarioModel.create(req.body)
        //envia mensagem pro client
        res.send('Cadastrando com sucesso')
    }

    static async favoritar(req, res) {
        let usuario_id = req.body.usuario_id
        let frase_id = req.body.frase_id

        //Busco por id no banco
        let usuario = await usuarioModel.findById({
            _id: usuario_id
        })

        const favoritos = usuario.favoritos.concat(frase_id);

        await usuarioModel.updateOne({
            _id: usuario_id
        }, {
            favoritos
        });


        res.send('Favoritado com sucesso')
    }

    static async alterar(req, res) {

        //Leitura dos dados em Json
        let id = req.body.id

        var cat = {
            descricao: req.body.descricao
        }

        await usuarioModel.findByIdAndUpdate({
            _id: id
        }, cat)

        res.send('Alterado com sucesso ')

    }

    static async deletar(req, res) {
        const id = req.params.id;

        await usuarioModel.deleteOne({
            _id: id
        })

        res.send('Deletado com sucesso')
    }
}

module.exports = UsuarioController