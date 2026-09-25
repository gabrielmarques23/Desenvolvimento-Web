import { Component, signal } from '@angular/core';
import { Exemplo01 } from './exemplo01/exemplo01';

@Component({
  imports: [Exemplo01],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Aula7');
}
