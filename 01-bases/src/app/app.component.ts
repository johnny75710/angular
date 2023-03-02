import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Contador app';
  numero: number = 0;
  base: number = 5;
  sumar(valor: number){
    this.numero += valor;
  }

  restar(valor: number){
    this.numero -= valor;
  }
}
