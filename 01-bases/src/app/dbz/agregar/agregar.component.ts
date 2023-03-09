import { Component, EventEmitter, Input, Output } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };
  // @Input()
  // personajes: any[] = [];

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    // this.personajes.push(this.nuevo)
    this.onNuevoPersonaje.emit(this.nuevo)
    
    // console.log(this.personajes)
  }
}
