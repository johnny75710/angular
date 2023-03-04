import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number = 32;

    getNombre(): string{
        return `El nombre es ${this.nombre} -
                La edad es ${this.edad}`
    }

    cambiarNombre(){
        this.nombre = 'Spiderman';
    }
    cambiarEdad(){
        this.edad = 24;
    }
}
