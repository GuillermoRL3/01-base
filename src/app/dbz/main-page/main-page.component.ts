import {Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{


   //arreglo de personajes
   personajes: Personaje[] = [
    {
      nombre: 'goku',
      poder: 30000
    },
    {
      nombre: 'Vegeta',
      poder: 25000
    },
    {
      nombre: 'Ms. Satan',
      poder: 200
    },
    {
      nombre: 'Bulma',
      poder: 20
    }
  ];

  nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

  agregarNuevoPersonaje( argumento: Personaje){
    this.personajes.push(argumento)
  };

  constructor(private dbzService: DbzService){  }

}
