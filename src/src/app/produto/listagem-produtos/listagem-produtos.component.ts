import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/modelo/produto';
import { Produtos } from 'src/app/shared/modelo/produtos';

@Component({
  selector: 'app-listagem-produtos',
  templateUrl: './listagem-produtos.component.html',
  styleUrls: ['./listagem-produtos.component.css']
})
export class ListagemProdutosComponent {

  produtos = Produtos;
  excluir(prodExcluir: Produto): void {
    const indx = this.produtos.findIndex(produto => produto.barCode === prodExcluir.barCode);

  this.produtos.splice(indx, 1);
  }

}
