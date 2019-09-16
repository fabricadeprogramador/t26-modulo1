import Usuario from './usuario.js';

let usuario = new Usuario('Virmerson', 'Bento dos Santos');

//console.log(usuario)
document.getElementById("saida").innerHTML = usuario.nomeCompleto