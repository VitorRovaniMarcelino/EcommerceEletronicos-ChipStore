const carrinhoContainer = document.querySelector(".carrinho-container");
const carrinhoVazio = document.querySelector(".carrinho-vazio");
const precoTotal = document.getElementById("preco-total");

function atualizarCarrinho() {
    const produtos = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinhoContainer.innerHTML = "";

    if (produtos.length === 0) {
        carrinhoVazio.style.display = "block";
        precoTotal.innerText = "Total: R$ 0,00";
        return;
    }

    carrinhoVazio.style.display = "none";

    let total = 0;

    produtos.forEach((produto, index) => {
        total += produto.preco * (produto.quantidade || 1);

        const divProduto = document.createElement("div");
        divProduto.classList.add("produtosMenu");
        divProduto.style.width = "100%";
        divProduto.style.maxWidth = "400px";
        divProduto.style.display = "flex";
        divProduto.style.alignItems = "center";
        divProduto.style.justifyContent = "space-between";
        divProduto.style.padding = "10px";
        divProduto.style.backgroundColor = "white";
        divProduto.style.borderRadius = "10px";

        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}" style="width: 80px; border-radius: 10px;">
            <div style="flex: 1; margin-left: 10px;">
                <p style="margin: 0; font-weight: bold;">${produto.nome}</p>
                <p style="margin: 0;">R$ ${produto.preco}</p>
                <p style="margin: 0;">Quantidade: ${produto.quantidade || 1}</p>
            </div>
            <button class="btn btn-danger btn-sm remover" data-index="${index}">Remover</button>
        `;

        carrinhoContainer.appendChild(divProduto);
    });

    precoTotal.innerText = `Total: R$ ${total.toFixed(2)}`;

    // Adiciona funcionalidade aos botões de remover
    document.querySelectorAll(".remover").forEach(botao => {
        botao.addEventListener("click", (e) => {
            const idx = e.target.dataset.index;
            produtos.splice(idx, 1);
            localStorage.setItem("carrinho", JSON.stringify(produtos));
            atualizarCarrinho();
        });
    });
}

window.addEventListener("DOMContentLoaded", atualizarCarrinho);
