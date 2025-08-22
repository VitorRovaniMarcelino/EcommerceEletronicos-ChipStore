const botoes = document.querySelectorAll('.add-to-cart');
const comprarAgora = document.getElementById('comprar-agora');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const nome = botao.dataset.nome;
    const preco = botao.dataset.preco;
    const imagem = botao.dataset.imagem;

    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, preco, imagem });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(nome + ' adicionado ao carrinho!');
  });
});

comprarAgora.addEventListener('click', () => {
    alert("Produto comprado com sucesso!")
});