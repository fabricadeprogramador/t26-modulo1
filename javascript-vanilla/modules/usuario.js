export default class Usuario {

    constructor(nome, sobreNome) {
        this.nome = nome;
        this.sobreNome = sobreNome;
    }

    get nomeCompleto() {
        return this.nome + " " + this.sobreNome;
    }
}

//https://medium.com/trainingcenter/entendendo-m%C3%B3dulos-no-javascript-73bce1d64dbf