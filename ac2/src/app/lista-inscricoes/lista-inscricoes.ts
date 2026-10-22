import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../services/inscricao-service';

@Component({
  selector: 'app-lista-inscricoes',
  imports: [RouterLink],
  templateUrl: './lista-inscricoes.html',
})
export class ListaInscricoes {
  protected readonly inscricaoService = inject(InscricaoService);
}
