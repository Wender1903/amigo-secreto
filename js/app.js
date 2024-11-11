let amigos = []
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');

    if (!(nomeAmigo.value.trim())) {
        alert('Por favor digite o nome de alguém antes de clicar no botão adicionar');
        document.getElementById('nome-amigo').value = '';
        return;
    }

    if (amigos.includes(nomeAmigo.value)) {
        alert(`a pessoa de nome ${nomeAmigo.value} já foi adicionado`);
        document.getElementById('nome-amigo').value = '';
        return;

    }


    amigos.push(nomeAmigo.value)
    alert(`${nomeAmigo.value} adicionada(o) na lista com sucesso :)`)
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = nomeAmigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + nomeAmigo.value;
    }

    nomeAmigo.value = '';
    document.getElementById('nome-amigo').value = '';

}

function sortear() {
    if (amigos.length == 1) {
        alert('É impossível fazer um sorteamento de nomes com apenas uma única pessoa');
        return;
    } else if (amigos.length <= 3) {
        alert('Para poder sortear os nomes, digite pelo menos 4 amigos que irão participar do amigo secreto');
        return
    }
    embaralha(amigos)
    let sorteados = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteados.innerHTML = sorteados.innerHTML + amigos[i] + '-->' + amigos[0] + '<br>';

        } else {
            sorteados.innerHTML = sorteados.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }

    }

}

function embaralha(lista) {
    for (let indice = lista.lenght; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] =
            lista[indiceAleatorio], lista[indice - 1];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}
