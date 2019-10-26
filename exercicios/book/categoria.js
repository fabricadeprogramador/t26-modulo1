class Categoria {

    constructor(descricao) {
        this.descricao = descricao
        this.frases = []
    }

    novaFrase(frase) {
        this.frases.push({
            texto: frase,
            favorito: false
        })
    }

    favoritar(indiceFrase) {
        this.frases[indiceFrase].favorito = !this.frases[indiceFrase].favorito
    }

    getFavoritos() {
        let favoritos = [];
        for (let i = 0; i < this.frases.length; i++) {
            if (this.frases[i].favorito == true) {
                favoritos.push(this.frases[i])
            }
        }
        return favoritos;
    }

}