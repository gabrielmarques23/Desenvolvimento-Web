import { Routes } from '@angular/router';
import { CadastrarInscricao } from './cadastrar-inscricao/cadastrar-inscricao';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastrarInscricao },
];
