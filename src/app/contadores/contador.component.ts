import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template:`
        <!-- <h1>Hola mundo</h1> -->
        <H1>{{title}}</H1>

        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="acomulador(base)">+{{base}}</button>
        <span>{{numero}}</span>
        <!-- <button (click)="acomulador(-base)">-{{base}}</button> -->

        <!-- otra manera de hacer el acomulador en negativo -->
        <button (click)="acomulador(base * -1)">-{{base}}</button>
    `
})
export class ContadorComponent{
    title: string = 'Bases de Angular';
    numero: number = 10;
    //tarea para hacer
    base: number = 5;

    acomulador(valor:number){
        this.numero += valor;
  }
}