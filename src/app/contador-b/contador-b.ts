import { Component } from '@angular/core';
import { ContadorService } from '../services/contador-service';
ContadorService

@Component({
  imports: [],
  selector: 'app-contador-a',
  styleUrl: './contador-a.css',
  templateUrl: './contador-b.html',
})
export class ContadorA {
  constructor(public contador: ContadorService) {

  }
}
