import { Service, signal } from '@angular/core';

export type StatusInscricao = 'Pendente' | 'Confirmada';

export interface Inscricao {
  id: number;
  nome: string;
  email: string;
  oficina: string;
  status: StatusInscricao;
}

export type NovaInscricao = Omit<Inscricao, 'id' | 'status'>;

@Service()
export class InscricaoService {
  private readonly inscricoes = signal<Inscricao[]>([]);
  private readonly proximoId = signal(0);

  listar(): Inscricao[] {
    return this.inscricoes();
  }

  adicionar(novaInscricao: NovaInscricao): void {
    this.proximoId.update((id) => id + 1);
    this.inscricoes.update((lista) => [
      ...lista,
      { id: this.proximoId(), ...novaInscricao, status: 'Pendente' },
    ]);
  }

  remover(id: number): void {
    this.inscricoes.update((lista) => lista.filter((inscricao) => inscricao.id !== id));
  }

  confirmarInscricao(id: number): void {
    this.inscricoes.update((lista) =>
      lista.map((inscricao) =>
        inscricao.id === id ? { ...inscricao, status: 'Confirmada' } : inscricao,
      ),
    );
  }
}
