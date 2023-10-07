import { Component } from '@angular/core';
import { Produto } from 'src/app/shared/modelo/produto';
import { Produtos } from 'src/app/shared/modelo/produtos';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-mantem-produto',
  templateUrl: './mantem-produto.component.html',
  styleUrls: ['./mantem-produto.component.css']
})
export class MantemProdutoComponent {
  produtodemanutencao: Produto;
  cadastrando = true;
  botaoName = 'Cadastrar';

  produtos = Produtos;
  constructor(private rotAtual: ActivatedRoute, private roteador: Router){
    this.produtodemanutencao = new Produto('','','');
    const idEditar = this.rotAtual.snapshot.paramMap.get('barCode');
    if (idEditar) {
      const produtoCerto = this.produtos.find(produto => produto.barCode === idEditar);
      if (produtoCerto) {
        this.cadastrando = false;
        this.botaoName = 'Salvar';
        this.produtodemanutencao = produtoCerto;
      }
    } else {
      this.botaoName = 'Cadastrar';
    }
}
  manter(): void {
    if (this.cadastrando && this.produtodemanutencao) {
      this.produtos.push(this.produtodemanutencao);
    }
    this.produtodemanutencao = new Produto();
    this.botaoName = 'Cadastrar';
    this.roteador.navigate(['listagemprodutos']);

  }

 }
