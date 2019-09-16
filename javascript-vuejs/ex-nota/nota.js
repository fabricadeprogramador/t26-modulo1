var app = new Vue({
    el: "#app",
    data: {
        nome: "",
        nota1: "",
        nota2: "",
        nota3: "",


        aprovados: 0,
        recuperacao: 0,
        reprovados: 0,

        pessoas: [],
        filtrado: []
    },
    methods: {

        filtrarSituacao: function (situacao) {

            if (situacao == "TODOS")
                this.filtrado = [...this.pessoas];
            else
                this.filtrado = this.pessoas.filter(p => p.situacao == situacao)

            //ordena o filtro por media
            this.filtrado.sort(function (p1, p2) {
                return p2.media - p1.media
            })

        },


        //metodo que insere no array de pessoas
        inserirPessoa: function (nome, media, situacao) {
            //Criando um objeto Pessoa 
            let pessoa = {
                nome: nome,
                media: media,
                situacao: situacao
            }
            //Adicionando no array de pessoas
            this.pessoas.push(pessoa)

        },
        //Meto do que calcula a media, verifica a situacao do aluno
        verificarSituacao: function () {
            //Conversao em floats
            let n1 = parseFloat(this.nota1);
            let n2 = parseFloat(this.nota2);
            let n3 = parseFloat(this.nota3);

            //Calculo da media
            let media = (n1 + n2 + n3) / 3;

            // Calcula as quantidades
            if (media >= 7) {
                //Soma os aprovados
                this.aprovados++;
                //Insere o array
                this.inserirPessoa(this.nome, media, "APROVADO");

            } else if (media >= 4 && media < 7) {
                //Soma os em recuperacao
                this.recuperacao++;
                //Insere o array
                this.inserirPessoa(this.nome, media, "RECUPERACAO");

            } else {
                //Soma os reprovados
                this.reprovados++;
                //Insere o array
                this.inserirPessoa(this.nome, media, "REPROVADO");

            }


        }

    }
})