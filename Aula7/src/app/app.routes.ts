import { Routes } from '@angular/router';
import { Exemplo01 } from './exemplo01/exemplo01';
import { Exemplo02 } from './exemplo02/exemplo02';


export const routes: Routes = [
    { path: 'ex1', component: Exemplo01 },
    { path: 'ex2', component: Exemplo02 }
];
