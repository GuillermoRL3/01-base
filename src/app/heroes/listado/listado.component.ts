import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {

  heroes: string [] = ['Super man','Sapyder man', 'Flash', 'Hulk', 'Thor'];
  
  heroesBorrados: string = '';

  borrarHeroe() {
    console.log('borrando..')

    this.heroesBorrados = this.heroes.shift()||'';
    
  }
}
