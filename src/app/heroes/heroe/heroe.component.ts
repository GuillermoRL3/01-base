import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    title:string = 'Heroe Component Work';
    nombre:string = 'Spyder men';
    edad: number = 22 ;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        //return this.nombre + ' - ' + this.edad
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
        this.nombre = "Hombre araña";
    }

    cambiarEdad():void{
        this.edad = 20; 
    }
}