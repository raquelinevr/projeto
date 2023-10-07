import { Produto } from "./produto";

export const Produtos: Array<Produto> = [
    {
    nome: "Aborbora",
    preco: "12.00",
    barCode: "12342"
}]
//     private listaProdutos: Produto[];
  
//     constructor() {
//       this.listaProdutos = [];
//     }
  
//     public adicionarProduto(produto: Produto): void {
//       this.listaProdutos.push(produto);
//     }
  
//     public listarProdutos(): Produto[] {
//       return this.listaProdutos;
//     }
  
//     public buscarProdutoPorNome(nome: string): Produto | undefined {
//       return this.listaProdutos.find((produto) => produto.getNome() === nome);
//     }
//   }