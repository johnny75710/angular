import { Component } from '@angular/core';

interface Personaje{
  nombre: string | null;
  poder: number | null;
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {

// cambioNombre($event: Event) {

// }

  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    }, 
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ]
  nuevo: Personaje = {
    nombre: null,
    poder: null
  }

  agregar(){
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: null,
      poder: null
    }
  }
}
