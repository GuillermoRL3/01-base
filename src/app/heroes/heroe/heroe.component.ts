import { Component } from "@angular/core";

//decoracion
@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
//calse quue se puede importar exportar
export class HeroeComponent{
    title:string = 'Heroe Component Work';
    nombre:string = 'Spyder men';
    edad: number = 22 ;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    //metodo obtenerNombre
    obtenerNombre(): string{
        //return this.nombre + ' - ' + this.edad
        return `${this.nombre} - ${this.edad}`
    }
    //metodo cambiarNombre
    cambiarNombre():void{
        this.nombre = "Hombre araña";
    }
    //metodo cambiarEdad
    cambiarEdad():void{
        this.edad = 20; 
    }
}