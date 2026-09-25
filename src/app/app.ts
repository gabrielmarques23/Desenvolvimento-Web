import { Component, signal } from '@angular/core';
import { Exemplo01 } from './exemplo01/exemplo01';
import { Exemplo02 } from './exemplo02/exemplo02';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Exemplo01, RouterOutlet, Exemplo02],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Aula7');
}
