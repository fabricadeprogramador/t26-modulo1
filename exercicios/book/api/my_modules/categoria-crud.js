class CategoriaCRUD {

    constructor() {
        this.categorias = []
    }

    cadastrarCategoria(categoria) {
        this.categorias.push(categoria);
    }

    getCategoriaByIndex(indice) {
        return this.categorias[indice]
    }
    getCategoriaById(id) {
        for (let i = 0; i < this.categorias.length; i++) {
            if (this.categorias[i].id == id) {
                return this.categorias[i];
            }
        }
    }

    getIndexById(id) {
        for (let i = 0; i < this.categorias.length; i++) {
            if (this.categorias[i].id == id) {
                return i;
            }
        }
        return -1
    }

    alterar(categoria) {
        let id = categoria.id
        let categoriaEncontrada = this.getCategoriaById(id)
        categoriaEncontrada.descricao = categoria.descricao


    }

    deletar(id) {
        let indice = this.getIndexById(id);
        this.categorias.splice(indice, 1)
    }

}

module.exports = CategoriaCRUD