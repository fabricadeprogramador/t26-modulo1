let arrTarefas = [];
let indice = 0;

function adicionarTarefa() {

    //1 ) Ler a descricao da tarefas
    let descTarefa = document.getElementById("descTarefa").value;

    // 2 ) Construindo um objeto tarefa com a descricao e o status
    let objTarefa = {
        desc: descTarefa,
        completa: false
    }

    // 3) adicionando tarefa no array
    arrTarefas.push(objTarefa);


    //4) Adicionando na tela
    let novaTarefa = `<div>
                        <a href="#" id="${indice}" onclick="completaTarefa(${indice})"> ${descTarefa} </a>
                        <img src="icons/check.png"> 
                        <img src="icons/delete.png"> 
                      </div>`;
    indice = indice + 1;
    let divLista = document.getElementById("lista");

    //divLista.innerHTML = divLista.innerHTML + novaTarefa;
    divLista.innerHTML += novaTarefa;
}

function tecla(e) {
    if (e.code == "Enter") {
        adicionarTarefa()
    }
}

function completaTarefa(posicao) {

    if (arrTarefas[posicao].completa == false) {
        //muda o status
        arrTarefas[posicao].completa = true

        //efeito de tela decotario
        document.getElementById(posicao).style.textDecoration = "line-through";
    } else {

        //muda o status
        arrTarefas[posicao].completa = false

        //efeito de tela decotario
        document.getElementById(posicao).style.textDecoration = "none";
    }
}

function imprimirTarefa(posicao) {
    console.log(arrTarefas[posicao])
}