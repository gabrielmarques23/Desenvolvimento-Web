import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Inscricao, InscricaoService } from '../services/inscricao-service';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
})
export class ListaInscricoes {
  inscricaoService = inject(InscricaoService);

  get inscricoes(): Inscricao[] {
    return this.inscricaoService.inscricoes();
  }

  get total(): number {
    return this.inscricoes.length;
  }

  get confirmadas(): number {
    return this.inscricoes.filter((inscricao) => inscricao.status === 'Confirmada').length;
  }

  get pendentes(): number {
    return this.total - this.confirmadas;
  }
}
