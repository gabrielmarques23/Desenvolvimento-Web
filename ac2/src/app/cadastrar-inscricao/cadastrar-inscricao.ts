import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../services/inscricao-service';

@Component({
  selector: 'app-cadastrar-inscricao',
  imports: [FormsModule, RouterLink],
  templateUrl: './cadastrar-inscricao.html',
})
export class CadastrarInscricao {
  protected readonly inscricaoService = inject(InscricaoService);
  protected readonly oficinas = ['Angular', 'TypeScript', 'Git'];
  protected formulario = { nome: '', email: '', oficina: '' };

  protected cadastrar(): void {
    if (!this.formulario.nome.trim() || !this.formulario.email.trim() || !this.formulario.oficina) {
      return;
    }

    this.inscricaoService.adicionar(this.formulario);
    this.formulario = { nome: '', email: '', oficina: '' };
  }
}
