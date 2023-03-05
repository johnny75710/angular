import { Component, Input } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: 'Café solo', 
    poder: 40000
  };
  @Input()
  personajes: any[] = [];

  agregar(){
    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: null,
      poder: null
    }
    console.log(this.personajes)
  }
}
