//Es buena practica poner pimero todos los imports que son de Angular!!
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//luego seria las importaciones de terceros
/*


*/

//las importaciones que nosotros creamos
import { MainPageComponent } from './main-page/main-page.component';




@NgModule({
  declarations: [
    MainPageComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { 
  
}
