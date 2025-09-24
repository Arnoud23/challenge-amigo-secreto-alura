//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeNomes = [];

function adicionarNome() {
    let nomeDigitado = document.getElementById('amigo').value;
    
    if (nomeDigitado === '') {
        alert('Digite um nome para adicionar!');
        return; 
    }
    
    listaDeNomes.push(nomeDigitado);
    
    let listaHTML = document.getElementById('listaAmigos');
    let novoItem = document.createElement('li');
    novoItem.textContent = nomeDigitado;
    listaHTML.appendChild(novoItem);
    
    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = '';
    
    if (listaDeNomes.length < 2) {
        alert('Adicione pelo menos dois nomes para sortear!');
        return;
    }

    let listaParaSorteio = [...listaDeNomes];
    
    listaParaSorteio.sort(() => Math.random() - 0.5);

    for (let i = 0; i < listaParaSorteio.length; i++) {
        let doador = listaParaSorteio[i];
        let receptor = listaParaSorteio[(i + 1) % listaParaSorteio.length];
        
        let textoSorteio = document.createElement('li');
        textoSorteio.textContent = `${doador} tirou: ${receptor}`;
        
        resultadoHTML.appendChild(textoSorteio);
    }
}
