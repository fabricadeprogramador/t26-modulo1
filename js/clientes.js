let arrClientes = [{
    nome: 'Jão'
}, {
    nome: 'Zé'
}, {
    nome: 'Maria'
}];

function listarClientes() {

    setTimeout(function () {
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
    setTimeout(function () {
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


let btnSalvar = document.createElement("button");

btnSalvar.innerText = "Salvar JS ";

btnSalvar.addEventListener("click", salvar);

document.getElementById("cadCli").appendChild(btnSalvar)
//document.body.appendChild(btnSalvar)