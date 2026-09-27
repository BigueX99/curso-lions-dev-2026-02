// Cadastro de produtos.
// Crie uma função cadastrarProduto(nome, preco, quantidade) -> OK
// que devolva um objeto com essas três propriedades. -> OK
// Chame a função três vezes, guarde os objetos em um array e -> OK
// imprima o valor total do estoque (preço x quantidade de cada um, somados).
// Conteúdos: funções com retorno, objetos, arrays e laço.

function cadastrarProduto(nomeProduto, precoUnitario, qtde) {
    const produto = {
        nome: nomeProduto,
        preco: precoUnitario,
        quantidade: qtde,
    };
    return produto;
}

let estoque = [];

const mouse = cadastrarProduto('mouse', 50.99, 1);
estoque.push(mouse);

const teclado = cadastrarProduto('teclado', 100.99, 5);
estoque.push(teclado);

const monitor = cadastrarProduto('monitor', 399.99, 10);
estoque.push(monitor);

console.table(estoque);

for (let i = 0; i < estoque.length; i++) {
    const soma = estoque[i].preco * estoque[i].quantidade;
    console.log(`${estoque[i].nome}: ${soma}`);
}
