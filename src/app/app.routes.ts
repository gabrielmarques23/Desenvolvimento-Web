import { Routes } from '@angular/router';
import { ListaProdutos } from './lista-produtos/lista-produtos';
import { ContadorA } from './contador-a/contador-a';
import { ContadorB } from './contador-b/contador-b';

export const routes: Routes = [
    { path: 'lista-produtos', component: ListaProdutos },
    { path: 'contador-a', component: ContadorA },
    { path: 'contador-b', component: ContadorB }
];
