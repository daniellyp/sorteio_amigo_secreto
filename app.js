let amigos = [];
function adicionarAmigo () {
    let inputAmigo = document.getElementById('amigo');
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === '') {
        alert ('Insira um nome.');
        return;
    }
    amigos.push(nomeAmigo);
    inputAmigo.value = '';
    inputAmigo.focus();
    console.log(amigos);

    let listaAmigos = document.getElementById('listaAmigos');
    //listaAmigos.innerHTML = '';
    
    let itensDaLista = '';
    for (let i = 0; i < amigos.length; i++) {
        const novoNome = amigos[i];
        itensDaLista = itensDaLista + '<li>' + novoNome + '</li>';
    }

    listaAmigos.innerHTML = itensDaLista;
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert ('Insira um nome.');
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    console.log(indiceSorteado, amigos[indiceSorteado]);
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigos[indiceSorteado];

}