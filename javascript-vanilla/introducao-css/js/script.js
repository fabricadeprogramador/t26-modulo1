function salvar() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let sexo = document.querySelector("input[type=radio]:checked").value;

    // imprimir o nome na tag div#saida
    document.getElementById("saida").innerHTML += nome + " (" + idade + ") " + sexo + ", ";
}