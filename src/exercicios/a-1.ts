interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
}

const produto: Produto = {
  nome: "Dildo 60cm",
  preco: 500,
  disponivel: true,
};

console.log(`Produto: ${produto.nome}`);
console.log(`Preço: R$ ${produto.preco}`);
console.log(`Disponível: ${produto.disponivel ? "Sim" : "Não"}`);