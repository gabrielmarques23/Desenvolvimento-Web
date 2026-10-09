import { Component } from '@angular/core';
import { ProdutoService } from '../services/produto-service';

@Component({
  imports: [],
  selector: 'app-lista-produtos',
  styleUrl: './lista-produtos.css',
  templateUrl: './lista-produtos.html',
})

export class ListaProdutos {
  produtos: string[];

  constructor(private produtoService: ProdutoService) {
    this.produtos = this.produtoService.listar();
  }
}
