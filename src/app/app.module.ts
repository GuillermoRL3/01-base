import { ApplicationInitStatus, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModules } from './heroes/heroes.module';
import { ContadorModule } from './contadores/contador.module';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,   
    HeroesModules,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
