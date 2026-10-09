import { Service } from '@angular/core';
import { Injectable } from '@angular/core';


@Service()
export class ProdutoService {
    private produtos = ['Mouse', 'Teclado', 'Monitor'];

    listar(): string[] {
        return this.produtos;
    }
}

