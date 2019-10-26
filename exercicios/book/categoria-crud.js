class CategoriaCRUD {

    constructor() {
        this.categorias = []
    }

    cadastrarCategoria(categoria) {
        this.categorias.push(categoria);
    }

    getCategoria(indice) {
        return this.categorias[indice]
    }

}