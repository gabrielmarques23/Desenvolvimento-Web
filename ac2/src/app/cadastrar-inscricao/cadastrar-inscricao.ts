import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService, NovaInscricao } from '../services/inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
})
export class CadastrarInscricao {
  inscricaoService = inject(InscricaoService);
  oficinas = ['Angular', 'TypeScript', 'Git'];
  formulario: NovaInscricao = { nome: '', email: '', oficina: '' };

  cadastrar() {
    if (!this.formulario.nome.trim() || !this.formulario.email.trim() || !this.formulario.oficina) {
      return;
    }

    this.inscricaoService.adicionar(this.formulario);
    this.formulario = { nome: '', email: '', oficina: '' };
  }
}
