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