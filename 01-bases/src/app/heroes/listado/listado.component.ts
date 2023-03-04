import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 
                      'IronMan', 
                      'Capitán América', 
                      'Hulk', 
                      'Capitana Marvel', 
                      'Thor']
  heroeBorrado: string = '';
  borrarHeroe(){
    this.heroeBorrado = this.heroes.pop() || '';
  }
}


