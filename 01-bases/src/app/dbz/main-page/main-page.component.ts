import { Component } from '@angular/core';

interface Personaje{
  nombre: string;
  poder: number
}
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
cambioNombre($event: Event) {
throw new Error('Method not implemented.');
}

  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }

  agregar(){
    console.log(this.nuevo.nombre)
  }
}
