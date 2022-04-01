import {Component} from '@angular/core';

interface Personaje{
  nombre: string,
  poder: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

  // constructor() { }

  // ngOnInit(): void {
  // }

  
  /*objeto */
  nuevo: Personaje ={
    nombre:'',
    poder: 0
  }

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


  //componente
  agregar() {
    if (this.nuevo.nombre.trim().length === 0){
      return alert(' Agrega un nombre');
    }
    if(this.nuevo.nombre != ''){
      return (' se agrego' + this.nuevo.nombre),
      console.log(this.nuevo),
      
      //se reseteara el valoy para que salga uno nuevo
      this.personajes.push(this.nuevo), 
      this.nuevo = {
         nombre:'',
         poder:0
      };
    }  
  }

}
