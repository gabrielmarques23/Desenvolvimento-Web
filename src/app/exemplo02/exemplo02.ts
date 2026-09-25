import { Component } from '@angular/core';

type Produtos = {
  produto: string;
  preco: number;
  quantidade: number
};


@Component({
  imports: [],
  selector: 'app-exemplo02',
  styleUrl: './exemplo02.css',
  templateUrl: './exemplo02.html',
})

export class Exemplo02 {
  carrinho: Produtos[] = [{
    produto: "Tenis",
    preco: 400,
    quantidade: 1
  },
  {
    produto: "Bolsa",
    preco: 1500,
    quantidade: 1
  }
  ];
}
