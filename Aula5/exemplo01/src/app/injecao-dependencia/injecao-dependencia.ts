import { Component } from '@angular/core';
import { InjecaoDependenciaLogger } from '../injecao-dependencia-logger/injecao-dependencia-logger';

@Component({
  selector: 'injecao-dependencia',
  imports: [],
  styleUrl: './injecao-dependencia.css',
  templateUrl: './injecao-dependencia.html',
})
export class InjecaoDependencia {
  constructor(private logger: InjecaoDependenciaLogger) {
    this.logger.log('App iniciado');
  }
}
