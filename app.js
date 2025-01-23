let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {

    let input = document.getElementById('amigo');
    let nome = input.value.trim(); // Remove espaços em branco

    // Validar a entrada
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    // Atualizar o array de amigos
    amigos.push(nome);

    // Atualizar a lista exibida na página
    let listaAmigos = document.getElementById('listaAmigos');
    let item = document.createElement('li');
    item.textContent = nome;
    listaAmigos.appendChild(item);

    // Limpar o campo de entrada
    input.value = '';
}
// Função para atualizar a lista de amigos exibida na página
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de adicionar os novos elementos

    for (let amigo of amigos) {
        let item = document.createElement('li'); 
        item.textContent = amigo; // Define o texto do elemento como o nome do amigo
        listaAmigos.appendChild(item); // Adiciona o <li> à lista
    }
}
// Função para sortear um amigo 
function sortearAmigo() {
    // Verificar se há amigos no array
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo antes de realizar o sorteio.');
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o resultado no elemento de resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
