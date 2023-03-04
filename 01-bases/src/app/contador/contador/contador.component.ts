import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `<h1>{{ title }}</h1>
    <span>Base: {{ base }}</span><br><br>
    <button (click)="restar( base )">-{{ base }}</button>
    <span> {{ numero }} </span>
    <button (click)="sumar( base )">+{{ base }}
    </button>`
})


export class ContadorComponent{
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