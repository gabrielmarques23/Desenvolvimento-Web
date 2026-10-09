import { Routes } from '@angular/router';

import { InjecaoDependencia } from './injecao-dependencia/injecao-dependencia';

import { InjecaoDependenciaProdutoCatalogo } from './injecao-dependencia-produto-catalogo/injecao-dependencia-produto-catalogo';

export const routes: Routes = [
    { path: 'ingecao01', component: InjecaoDependencia },
    { path: 'ingecao04', component: InjecaoDependenciaProdutoCatalogo }
];
