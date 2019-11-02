class Categoria {

    constructor(descricao) {
        this.descricao = descricao
        this.frases = []
    }

    novaFrase(textoFrase, audioFrase) {
        this.frases.push({
            texto: textoFrase,
            favorito: false,
            audioFrase: audioFrase
        })
    }



    favoritar(indiceFrase) {
        this.frases[indiceFrase].favorito = !this.frases[indiceFrase].favorito
    }

    // getFavoritos() {
    //     let favoritos = [];
    //     for (let i = 0; i < this.frases.length; i++) {
    //         if (this.frases[i].favorito == true) {
    //             favoritos.push(this.frases[i])
    //         }
    //     }
    //     return favoritos;
    // }

    getFavoritos() {
        return this.frases.filter(function (frase) {
            return frase.favorito == true;
        })
    }

}