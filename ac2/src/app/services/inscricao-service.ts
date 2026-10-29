import { Service, signal } from '@angular/core';

export type StatusInscricao = 'Pendente' | 'Confirmada';

export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  oficina: string;
  status: StatusInscricao;
}

export interface NovaInscricao {
  nome: string;
  email: string;
  oficina: string;
}

@Service()
export class InscricaoService {
  inscricoes = signal<Inscricao[]>([]);
  private proximoId = 0;

  adicionar(dados: NovaInscricao) {
    this.proximoId = this.proximoId + 1;

    const novaInscricao: Inscricao = {
      id: this.proximoId,
      nome: dados.nome,
      email: dados.email,
      oficina: dados.oficina,
      status: 'Pendente',
    };

    const lista = this.inscricoes();
    const novaLista = lista.concat(novaInscricao);
    this.inscricoes.set(novaLista);
  }

  remover(id: number) {
    const lista = this.inscricoes();
    const novaLista = lista.filter((inscricao) => inscricao.id !== id);
    this.inscricoes.set(novaLista);
  }

  confirmar(id: number) {
    const novaLista: Inscricao[] = [];

    for (const inscricao of this.inscricoes()) {
      if (inscricao.id === id) {
        novaLista.push({
          id: inscricao.id,
          nome: inscricao.nome,
          email: inscricao.email,
          oficina: inscricao.oficina,
          status: 'Confirmada',
        });
      } else {
        novaLista.push(inscricao);
      }
    }

    this.inscricoes.set(novaLista);
  }
}
