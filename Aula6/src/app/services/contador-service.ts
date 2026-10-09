import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContadorService {
    valor = 0;

    incrementar() { this.valor++; }
    decrementar() { this.valor--; }
}
