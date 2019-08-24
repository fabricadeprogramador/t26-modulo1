let arrClientes = [{
    nome: 'Jão'
}, {
    nome: 'Zé'
}, {
    nome: 'Maria'
}];

function listarClientes() {

    console.log(`Ordenando array...`)

    arrClientes.sort((cli1, cli2) => {
        if (cli1.nome < cli2.nome) {
            return -1
        } else if (cli1.nome > cli2.nome) {
            return 1
        } else {
            return 0;
        }

    })

    console.log(`Carregando a lista de clientes ...`)



    setTimeout(() => {
        let saida = `<ul>`;


        arrClientes.forEach(item =>
            saida += `<li> ${item.nome}  </li>`
        )

        saida += `</ul>`;

        // document.body.innerHTML += saida;
        document.getElementById("saida").innerHTML = saida;

    }, 2000)

}

function cadastrarCliente(cliente, f) {

    //IMPLEMENTE INCLUSAO NO ARRAY 
    //CLINETE APÓS 2 SEGUNDOS
    console.log(`Cadastrando cliente ${cliente.nome} ...`)
    setTimeout(() => {
        arrClientes.push(cliente);
        console.log(`${cliente.nome} cadastrado com sucesso..`)
        f() // Invoco o callback
    }, 3000);

}

function salvar() {

    //Le o nome da tela realiza 
    //let nome = document.getElementsByTagName("input")[0].value;
    let nome = document.getElementById("nome").value;
    let cliente = {
        nome
    }
    cadastrarCliente(cliente, listarClientes) //3s


    //o cadastro de cliente "cadastrarCliente" e e
    //exibe a lista de clientes "listarClientes"


}

function excluir(index, f) {
    //remocao 
    console.log(`Excluindo objeto da posição ${index}`)
    setTimeout(() => {

        arrClientes.splice(index, 1)
        console.log(`Excluído com sucesso!`)
        f() // funcao apos excluir
    }, 2500);


    //carregar a lista

}


let btnSalvar = document.createElement("button");

btnSalvar.innerText = "Salvar JS ";

btnSalvar.addEventListener("click", salvar);

document.getElementById("cadCli").appendChild(btnSalvar)
//document.body.appendChild(btnSalvar)

listarClientes()