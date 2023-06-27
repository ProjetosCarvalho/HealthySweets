// função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto, precoProduto) {
  // busca o carrinho no Local Storage ou cria um novo objeto vazio
  var carrinho = JSON.parse(localStorage.getItem("carrinho") || "{}");
  // verifica se o produto já existe no carrinho
  if (carrinho[nomeProduto]) {
      // se sim, incrementa a quantidade
      carrinho[nomeProduto].quantidade++;
  } else {
      // se não, adiciona o produto com a quantidade 1
      carrinho[nomeProduto] = {preco: precoProduto, quantidade: 1};
  }
  // salva o carrinho atualizado no Local Storage
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  alert("O produto " + nomeProduto + " foi adicionado ao seu carrinho!");
}