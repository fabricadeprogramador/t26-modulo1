const CrudCategoria = require('./categoria-crud')
const Categoria = require('./categoria')
const crudCat = new CrudCategoria()

class CategoriaController {

    static listarTodos(req, res) {

        res.json(crudCat.categorias)

    }
    static buscarPorId(req, res) {
        res.json(crudCat.getCategoriaById(req.params.id))
    }

    static cadastrar(req, res) {

        //Ler o json do client
        //Cria um objeto categoria passanda a descricao no construtor
        let categoria = new Categoria(req.body.descricao, req.body.id);
        //Cadastra o objeto categoria
        crudCat.cadastrarCategoria(categoria)
        //envia mensagem pro client
        res.send('Cadastrando com sucesso')


    }

    static alterar(req, res) {

        //Leitura dos dados em Json
        let id = req.body.id
        let descricao = req.body.descricao

        let categoria = new Categoria(descricao, id);
        crudCat.alterar(categoria)
        res.send('Alterado com sucesso')

    }

    static deletar(req, res) {

        crudCat.deletar(req.params.id)
        res.send('Deletado com sucesso')


    }
}

module.exports = CategoriaController